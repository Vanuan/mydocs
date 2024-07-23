---
outline: deep
---

# Vitepress Overview

Vitepress is a static site generator that emphasizes content-first design. It’s built on top of Vite, making it fast and efficient, with a focus on providing a great experience for writing and managing content.

## Key Points

### Content Organization

- **Markdown Support**: Vitepress uses Markdown for content creation, adhering to the CommonMark specification. It supports front matter for adding metadata to your content files.
- **Content-First Approach**: Vitepress prioritizes content, making it easy to write and manage Markdown files.

### Customization

#### Content Organization, Settings and Metadata

- **.vitepress Folder**: Customization in Vitepress is managed through the `.vitepress` folder. This directory contains configuration files and allows for extensive customization of your site.
- **Front Matter (Metadata)**:
  - **Page-specific Front Matter**: Heavy use of front matter is common in `index.md`. This allows for the standardising landing page sections such as Hero.
  - **Global Content and Metadata**: Global settings and metadata can be configured in `.vitepress/config.mts`, allowing for site-wide customization and constants.

#### Templating and Styling

- **Vitepress Theming**: Vitepress supports theming, with default themes available and the option to create custom themes. Styling is managed through standard CSS, and you can leverage Vite’s powerful tooling for an optimized development experience.

## Practical Example

Markdown File Front Matter

```markdown
---
title: My Vitepress Post
date: 2023-07-20
tags:
  - vitepress
  - example
---

# Hello from Vitepress

This is a sample post written in Markdown.
```

### Configuration Example

In Vitepress, you configure your site through `.vitepress/config.mts`:

```typescript 
// .vitepress/config.mts

import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'My Vitepress Site',
  description: 'A blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],
  },
});
```


## API

This page demonstrates usage of some of the APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

This code runs at build-time when using the `docs:build` command and at runtime on client-side when using the `docs:dev` command. It is also possible to run it server-side at runtime.

## Results
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

### Theme Data
```json
{
  "nav": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Vitepress Overview",
      "link": "/vitepress-overview"
    }
  ],
  "sidebar": [
    {
      "text": "Overview",
      "items": [
        {
          "text": "Vitepress",
          "link": "/vitepress-overview"
        }
      ]
    }
  ],
  "socialLinks": [
    {
      "icon": "github",
      "link": "https://github.com/"
    }
  ]
}
```

### Page Data
```json
{
  "title": "Vitepress Overview",
  "description": "",
  "frontmatter": {
    "outline": "deep"
  },
  "headers": [],
  "relativePath": "vitepress-overview.md",
  "filePath": "vitepress-overview.md"
}
```

### Page Frontmatter

```json
{
  "outline": "deep"
}
```

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
