import fs from 'fs/promises';
import path from 'path';
import handlebars from 'handlebars';
import { unified } from 'unified';
import parse from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import matter from 'gray-matter';

// Clean and create dist directory
async function cleanDist() {
    await fs.rm('dist', { recursive: true, force: true });
    await fs.mkdir('dist', { recursive: true });
}

// Copy static files
async function copyStatic() {
    await fs.cp('static', 'dist', { recursive: true });
}

// Ensure directory exists
async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

// Register Handlebars partials
async function registerPartials() {
    const partialsDir = 'templates/partials';
    const partialFiles = await fs.readdir(partialsDir);

    for (const file of partialFiles) {
        const partialName = path.parse(file).name;
        const partialPath = path.join(partialsDir, file);
        const partialContent = await fs.readFile(partialPath, 'utf8');
        handlebars.registerPartial(partialName, partialContent);
    }
}

// Render Handlebars template
async function renderTemplate(templatePath, context) {
    const templateContent = await fs.readFile(templatePath, 'utf8');
    const template = handlebars.compile(templateContent);
    return template(context);
}

// Process markdown file
async function processMarkdownFile(inputPath, outputPath, templatePath, siteData) {
    const content = await fs.readFile(inputPath, 'utf8');
    const { data, content: markdownContent } = matter(content);

    const file = await unified()
        .use(parse)
        .use(frontmatter, ['yaml'])
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(stringify)
        .process(markdownContent);

    const htmlContent = String(file);

    const templateContext = {
        ...data,
        ...siteData,
        content: htmlContent
    };

    await ensureDir(path.dirname(outputPath)); // Ensure the directory exists before writing
    const html = await renderTemplate(templatePath, templateContext);
    await fs.writeFile(outputPath, html);
    return data;
}

// Build the site
async function build() {
    await cleanDist();
    await copyStatic();
    await registerPartials();

    // Load site data
    const siteData = JSON.parse(await fs.readFile('data/site.json', 'utf8'));

    // Render main index page
    await processMarkdownFile('content/index.md', 'dist/index.html', 'templates/main.hbs', siteData);

    // Render other pages
    await processMarkdownFile('content/about.md', 'dist/about.html', 'templates/main.hbs', siteData);
    await processMarkdownFile('content/contact.md', 'dist/contact.html', 'templates/main.hbs', siteData);

    // Render posts
    const postsDir = 'content/posts';
    const postFiles = await fs.readdir(postsDir);
    const posts = [];

    for (const file of postFiles) {
        const postName = path.parse(file).name;
        const data = await processMarkdownFile(path.join(postsDir, file), `dist/posts/${postName}.html`, 'templates/post.hbs', siteData);
        posts.push({ title: data.title, url: `/posts/${postName}.html` });
    }

    // Render posts index
    const postsIndexContext = {
        posts,
        ...siteData
    };
    const postsIndexHtml = await renderTemplate('templates/posts-index.hbs', postsIndexContext);
    await ensureDir('dist/posts'); // Ensure the directory exists before writing
    await fs.writeFile('dist/posts/index.html', postsIndexHtml);
}

// Run the build
build().catch(err => {
    console.error(err);
    process.exit(1);
});
