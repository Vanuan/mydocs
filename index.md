---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "mydocs"
  text: "random articles"
  tagline: Navigating the SaRGaSSo Sea of SSG
  actions:
    - theme: brand
      text: Pelican to Astro
      link: /pelican-to-astro
    - theme: alt
      text: Vitepress
      link: /vitepress

features:
  - title: Content format and tree structure
    details: Both Pelican and Astro support Markdown, which is standardized using the CommonMark specification. Pelican also supports RST (reStructuredText), which is more suited for technical documentation and printable materials. Astro uses Remark, part of the unified ecosystem, for extending Markdown capabilities.
  - title: Front Matter
    details: Migration isn't just about content but also about metadata. This typically uses YAML format to specify metadata within Markdown files. Both Pelican and Astro use front matter, but the specific fields and their usage can differ. Front matter in Markdown files can include custom metadata, which needs to be carefully mapped from Pelican to Astro to ensure consistent behavior and presentation. Front matter in Markdown files can include custom metadata, which needs to be carefully mapped from Pelican to Astro to ensure consistent behavior and presentation.
  - title: Templating and Styling
    details: Pelican uses Jinja templates for layout and content organization, while Astro employs its own .astro file format for specifying templates, components, pages, and layouts. This allows seamless integration with the JS ecosystem, including client-side and server-side code. Transitioning from Jinja templates to Astro’s file format involves learning new syntax and methods for integrating content and styles.
---

