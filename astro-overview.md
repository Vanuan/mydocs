---
outline: deep
---

# Astro Overview

Astro is a modern static site generator that focuses on delivering fast, optimized websites. It supports multiple front-end frameworks, including React, Vue, Svelte, and more, making it highly flexible and adaptable to various use cases.

## Key Points

### Content Organization

- **Markdown and MDX Support**: Astro supports Markdown and MDX (Markdown with JSX) for content creation. This allows for enhanced interactivity and dynamic content within static Markdown files.
- **Content-Driven Approach**: Astro treats pages, layouts, components, and content at the same level. Content can be placed within any of these, as they all support the `.astro` format, which integrates JSX, HTML, and Frontmatter-inspired syntax. It also supports vanilla Markdown as well as imports from other file formats.


### Customization

#### Content Organization, Settings, and Metadata

- **File Structure**: Astro organizes content within a `src` directory. This directory contains pages, layouts, components in addition to content folder.
- **Front Matter (Metadata)**:
  - **Page-specific Front Matter**: Front matter in Astro is used within Markdown and MDX files to provide metadata such as titles, dates, and custom parameters.
  - **Global Content and Metadata**: Global settings and metadata are configured in `astro.config.mjs`, allowing for site-wide customization and constants. But you're also free to put it anywhere and import in the Astro template/layout/page/compoent.

#### Templating and Styling

- **Astro Components**: Astro uses its own `.astro` file format for creating components, pages, and layouts. This format allows for the seamless integration of HTML, JavaScript, and CSS within a single file.
- **Styling**: Astro supports a variety of styling options, including CSS and TailwindCSS. You can put your custom CSS into `public/` folder and use standard `<style>` tags as well as import it using CSS-in-JS aproach.

## Practical Example

### Index

```astro
---
// src/pages/index.astro

import Layout from '../layouts/Layout.astro';
import Post from '../components/Post.astro';

const posts = await Astro.glob('../posts/*.md');
---

<Layout title="Welcome to My Astro Site">
  <h1>Hello from Astro</h1>
  <ul>
    {posts.map(post => (
      <li>
        <Post post={post} />
      </li>
    ))}
  </ul>
</Layout>
```

### Layout Component

```astro
---
// src/layouts/Layout.astro

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
  </head>
  <body>
    <header>
      <h1>{title}</h1>
    </header>
    <main>
      <slot></slot>
    </main>
  </body>
</html>

```

### Post Component

```astro
---
// src/components/Post.astro

const { post } = Astro.props;
---

<article>
  <h2><a href={post.url}>{post.frontmatter.title}</a></h2>
  <p>{post.frontmatter.date}</p>
  <p>{post.content}</p>
</article>
```

### Post Markdown

```markdown
---
// src/posts/post1.md

title: First Post
date: 2023-07-01
---

# First Post

This is the content of the first post.

---
// src/posts/post2.md

title: Second Post
date: 2023-07-15
---

# Second Post

This is the content of the second post.
```

### Astro Configuration

Astro uses a configuration file `astro.config.mjs` to manage settings:


```javascript
// astro.config.mjs

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.com',
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
  integrations: [],
});
```


## More

Check out the [Astro documentation](https://docs.astro.build) for the full list of features and customization options.

