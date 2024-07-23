---
outline: deep
---

# Example: Tech Insights. Astro

## Overview

The "Tech Insights" website is a static site generated using Astro. The site includes blog posts, static pages (like "About" and "Contact"), and a posts index. Global site settings and strings are managed via configuration files.

## Directory Structure

Here's the directory structure (tree) for the "Tech Insights" website:

```
tech-insights/
├── src/
│   ├── content/
│   │   ├── config.js
│   │   ├── about.md
│   │   ├── contact.md
│   │   ├── index.md
│   │   └── posts/
│   │       ├── guide-to-responsive-design.md
│   │       └── understanding-javascript-closures.md
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── posts/
│   │       └── [slug].astro
│   ├── styles/
│   │   └── main.css
│   └── data/
│       └── site.json
├── public/
│   └── favicon.ico
├── astro.config.mjs
├── package.json
└── README.md
```

## Content

The site includes blog posts and static pages written in Markdown with front matter metadata.

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



### Collection Configuration

Create a configuration file for the collections in the `src` directory.

#### Content Configuration (src/content/config.js)

```js
// src/content/config.js
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    slug: z.string()
  }),
});

export const collections = {
  posts,
};
```

### Astro Configuration

Make sure to import and use the content configuration in your Astro config file.

#### Astro Configuration (astro.config.mjs)

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { collections } from './src/content/config';

export default defineConfig({
  site: 'https://your-site.com',
  title: 'Tech Insights',
  integrations: [mdx()],
  content: {
    collections,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
```

### Dynamic Post Page

The dynamic post page `[slug].astro` can now use the collection configuration to fetch and render content based on the slug.

#### Dynamic Post Page (src/pages/posts/[slug].astro)

```astro
---
// src/pages/posts/[slug].astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const { slug } = Astro.params;
const posts = await getCollection('posts');
const post = posts.find(p => p.slug === slug);

if (!post) {
  throw new Error(`Post with slug "${slug}" not found`);
}

const { Content, frontmatter } = post;
---

<BaseLayout title={frontmatter.title}>
  <Content />
</BaseLayout>
```

### Main Index Page

The main index page will list all posts and link to their respective pages.

#### Main Index Page (src/pages/index.astro)

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
---

<BaseLayout title="Tech Insights - Home">
  <h2>Posts</h2>
  <ul>
    {posts.map(post => (
      <li><a href={`/posts/${post.slug}`}>{post.frontmatter.title}</a></li>
    ))}
  </ul>
</BaseLayout>
```

### Summary

By using Astro's content collections, the "Tech Insights" website can manage Markdown content efficiently and ensure that the site structure is clean and maintainable. The minimal use of `.astro` files and the reliance on slugs for routing helps keep the project simple and organized.
