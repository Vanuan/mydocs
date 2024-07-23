---
outline: deep
---

# Example: Tech Insights. Vanilla, Handlebars, Remark

## Overview

The "Tech Insights" website is a static site generated from Markdown content, using Handlebars for templating. The site includes blog posts, static pages (like "About" and "Contact"), and a posts index. Global site settings and strings are managed via JSON files.

This example demostrates the "vanilla" (custom) approach that only uses off the shelf libraries to create a static site generator from a Markdown content.

### Directory Structure

Here's the directory structure (tree) for the "Tech Insights" website:

```
tech-insights/
├── build.mjs
├── content/
│   ├── about.md
│   ├── contact.md
│   ├── index.md
│   └── posts/
│       ├── guide-to-responsive-design.md
│       └── understanding-javascript-closures.md
├── data/
│   └── site.json
├── static/
│   └── styles/
│       └── main.css
├── templates/
│   ├── main.hbs
│   ├── partials/
│       ├── base.hbs
│       ├── footer.hbs
│       └── header.hbs
│   ├── post.hbs
│   └── posts-index.hbs
├── package.json
├── package-lock.json
└── README.md
```

### Templating with Handlebars

Handlebars is used to create reusable templates for the site.

Main Template, index template (`main.hbs`, `templates/posts-index.hbs`): These templates defines the overall HTML structure, including the header, footer, and a placeholder for the main content and index pages.

Partials: Smaller reusable templates for the header (`header.hbs`) and footer (`footer.hbs`). These are included in the base (`base.hbs`) partial which is used in main templates.

Example of an index template that demonstrates the main features of templating language:

```
<!-- templates/posts-index.hbs -->
{{#> base}}
  {{#*inline "content"}}
    <h2>Posts</h2>
    <ul>
        {{#each posts}}
        <li><a href="{{url}}">{{title}}</a></li>
        {{/each}}
    </ul>
  {{/inline}}
{{/base}}
```

### JSON Content

Global settings and strings are managed in a JSON file (`site.json`). This file includes data like the site title, tagline, and footer text, which can be easily referenced in templates.

### Markdown Content

Content for the site is written in Markdown, which is easy to read and write. Each Markdown file includes front matter metadata (written in YAML) to specify details like the title, date, and author of a post. Example:

```markdown

---
title: "Understanding JavaScript Closures"
date: "2024-07-20"
author: "Jane Doe"
---

# Understanding JavaScript Closures

JavaScript closures are a fundamental concept that every JavaScript developer should understand...
```

### Processing Pipeline

The build process involves several steps to convert the Markdown content into a static site:

1. **Clean and Prepare**: The `dist/` directory is cleaned to remove old files, and then recreated for the new build.
2. **Copy Static Assets**: Static files (like CSS) are copied from the `static/` directory to the `dist/` directory.
3. **Register Partials**: Handlebars partials (like the header and footer) are registered to be used in the main templates.
4. **Render Templates**: Markdown files are processed and converted to HTML using the following steps:
   - **Read Markdown**: Read the Markdown content and extract front matter metadata.
   - **Convert to HTML**: Use the `remark` and `rehype` libraries to convert Markdown to HTML.
   - **Apply Template**: Insert the HTML content into the Handlebars templates, along with any metadata from the front matter.
   - **Write Output**: Write the rendered HTML files to the `dist/` directory.

This is done using a custom `build.mjs` script.

#### Rendering Posts Index

Some custom code is used to collect all the content and pass it into Handlebars templates. For example to create a posts index page.

1. **Collect Posts**: The script reads all Markdown files in the `content/posts/` directory and extracts their metadata.
2. **Render Index**: The metadata is passed to the `posts-index.hbs` template to generate a list of links to all posts.
3. **Write Output**: The rendered index is written to `dist/posts/index.html`.

By using this structured approach, the "Tech Insights" site can be easily managed, with clear separation between content, layout, and site-wide settings. This makes it straightforward to update content or modify the site's appearance without needing to make extensive changes to the code.


