---
outline: deep
---

# Example: Tech Insights. Vitepress

## Overview

The "Tech Insights" website is a static site generated using VitePress. The site includes blog posts, static pages (like "About" and "Contact"), and a posts index. Global site settings and strings are managed via configuration files.

### Directory Structure

Here's a simplified view of the project's directory structure with VitePress:

```
tech-insights/
├── .vitepress/
│   ├── config.js
│   ├── theme/
│   │   ├── index.js
│   │   ├── Layout.vue
│   │   └── styles/
│   │       └── main.css
├── content/
│   ├── about.md
│   ├── contact.md
│   ├── index.md
│   └── posts/
│       ├── guide-to-responsive-design.md
│       └── understanding-javascript-closures.md
└── package.json
```

### Content

The site includes blog posts and static pages written in Markdown. VitePress uses front matter for metadata.

### Example Blog Post

```markdown
---
title: "Understanding JavaScript Closures"
date: "2024-07-20"
author: "Jane Doe"
---

# Understanding JavaScript Closures

JavaScript closures are a fundamental concept that every JavaScript developer should understand...

<!-- Rest of the blog post content -->
```

### Example Static Page

```markdown
---
title: "About Tech Insights"
---

# About Tech Insights

Tech Insights is your go-to source for the latest in technology news, tutorials, and reviews. Our mission is to provide in-depth articles and insights to help you stay ahead in the tech world...

<!-- Rest of the page content -->
```

### Themes and Templates

VitePress uses Vue components for theming and layout.

#### Layout Component (Vue)

```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <div>
    <header>
      <a href="/"><h1>{{ siteData.title }}</h1></a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/posts/">Posts</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <p>&copy; 2024 Tech Insights. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    siteData() {
      return this.$site;
    }
  }
}
</script>

<style src="./styles/main.css"></style>
```

### Styles (CSS)

The CSS styles are stored in `.vitepress/theme/styles/main.css`.

### Configuration

VitePress configuration is managed through `.vitepress/config.js`. This file defines settings such as site name, URL, and theme configuration.

#### Example Configuration (config.js)

```js
// .vitepress/config.js
module.exports = {
  title: 'Tech Insights',
  description: 'Your source for the latest in tech',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Posts', link: '/posts' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: 'Understanding JavaScript Closures', link: '/posts/understanding-javascript-closures' },
            { text: 'Guide to Responsive Design', link: '/posts/guide-to-responsive-design' }
          ]
        }
      ]
    }
  }
}
```

### Processing Pipeline

The build process with VitePress involves:

1. **Content Parsing**: VitePress reads Markdown files from the `content/` directory and parses the front matter metadata.
2. **Template Rendering**: The parsed content is injected into Vue components, combining static and dynamic content.
3. **Output Generation**: The final HTML files are generated and saved to the `dist/` directory.

### Example Workflow

1. **Markdown Input**: `content/posts/understanding-javascript-closures.md` is read and parsed.
2. **Template Application**: Content is injected into the `Layout.vue` component, including header and footer partials.
3. **Output**: The final HTML is generated and saved as `dist/posts/understanding-javascript-closures.html`.

### Rendering Posts Index

To render a custom posts index, you would create an `index.md` file inside the `content/posts` directory and update the sidebar configuration:

```markdown
---
title: "Posts"
---

# Posts

<ul>
  <li><a href="/posts/understanding-javascript-closures.html">Understanding JavaScript Closures</a></li>
  <li><a href="/posts/guide-to-responsive-design.html">Guide to Responsive Design</a></li>
</ul>
```

By using VitePress, the "Tech Insights" site can be efficiently managed with clear separation between content, layout, and site-wide settings, ensuring ease of updates and maintenance.
