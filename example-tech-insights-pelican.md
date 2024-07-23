---
outline: deep
---

# Example: Tech Insights. Pelican

## Overview

The "Tech Insights" website is a static site generated from Markdown content, using Pelican for templating and site generation. The site includes blog posts, static pages (like "About" and "Contact"), and a posts index. Global site settings and strings are managed via configuration files.

### Directory Structure

Here's a simplified view of the project's directory structure with Pelican:

```
tech-insights/
├── content/
│   ├── pages/
│   │   ├── about.md
│   │   ├── contact.md
│   └── posts/
│       ├── understanding-javascript-closures.md
│       └── guide-to-responsive-design.md
├── output/
│   └── ...
├── theme/
│   ├── static/
│   │   └── styles.css
│   ├── templates/
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── post.html
│   │   ├── pages/
│   │   │   ├── about.html
│   │   │   ├── contact.html
│   │   └── partials/
│   │       ├── header.html
│   │       └── footer.html
├── pelicanconf.py
├── publishconf.py
└── tasks.py
```

### Content

The site includes blog posts and static pages written in Markdown. Pelican uses reStructuredText by default, but it supports Markdown as well.

### Example Blog Post

Front matter is written without dashes:

```markdown
Title: Understanding JavaScript Closures
Date: 2024-07-20
Tags: JavaScript, Programming
Author: Jane Doe

# Understanding JavaScript Closures

JavaScript closures are a fundamental concept that every JavaScript developer should understand...

<!-- Rest of the blog post content -->
```

### Example Static Page

```markdown
Title: About Tech Insights

# About Tech Insights

Tech Insights is your go-to source for the latest in technology news, tutorials, and reviews. Our mission is to provide in-depth articles and insights to help you stay ahead in the tech world...

<!-- Rest of the page content -->
```

### Themes and Templates

Pelican uses Jinja2 templates for rendering HTML.

#### Base Template (HTML)

```html
<!-- theme/templates/base.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ SITENAME }} - {{ title }}</title>
  <link rel="stylesheet" href="{{ SITEURL }}/static/styles.css">
</head>
<body>
  {% include 'partials/header.html' %}
  <main>
    {{ content }}
  </main>
  {% include 'partials/footer.html' %}
</body>
</html>
```

#### Partials: Header and Footer

```html
<!-- theme/templates/partials/header.html -->
<header>
    <a href="{{ SITEURL }}/"><h1>{{ SITENAME }}</h1></a>
    <nav>
        <ul>
            <li><a href="{{ SITEURL }}/posts">Posts</a></li>
            <li><a href="{{ SITEURL }}/pages/about.html">About</a></li>
            <li><a href="{{ SITEURL }}/pages/contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
```

```html
<!-- theme/templates/partials/footer.html -->
<footer>
    <p>{{ SITENAME }} - &copy; 2024 All rights reserved.</p>
</footer>
```

### Styles (CSS)

The CSS styles remain the same and are stored in the `theme/static/styles.css` file.

```css
/* theme/static/styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 2rem;
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}
```

### Configuration

Pelican configuration is managed through `pelicanconf.py` and `publishconf.py`. These files define settings such as site name, URL, and paths.

#### Example Configuration (pelicanconf.py)

```python
# pelicanconf.py
SITENAME = 'Tech Insights'
SITEURL = ''
PATH = 'content'
TIMEZONE = 'America/New_York'
DEFAULT_LANG = 'en'

THEME = 'theme'
STATIC_PATHS = ['static']

# Plugin and extension settings
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.extra': {},
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

# URL settings
ARTICLE_URL = 'posts/{slug}.html'
ARTICLE_SAVE_AS = 'posts/{slug}.html'
PAGE_URL = 'pages/{slug}.html'
PAGE_SAVE_AS = 'pages/{slug}.html'
```

### Processing Pipeline

The build process with Pelican involves:

1. **Content Parsing**: Pelican reads Markdown files from the `content/` directory and parses the front matter metadata.
2. **Template Rendering**: The parsed content is injected into Jinja2 templates, combining static and dynamic content.
3. **Output Generation**: The final HTML files are written to the `output/` directory.

### Example Workflow

1. **Markdown Input**: `content/posts/understanding-javascript-closures.md` is read and parsed.
2. **Template Application**: Content is injected into the `post.html` template, including header and footer partials.
3. **Output**: The final HTML is generated and saved as `output/posts/understanding-javascript-closures.html`.

### Rendering Posts Index

Pelican automatically generates index pages. For a custom posts index:

1. **Custom Template**: Create a `posts.html` template.
2. **Configuration**: Ensure `posts.html` is recognized and linked.

By using Pelican, the "Tech Insights" site can be efficiently managed with clear separation between content, layout, and site-wide settings, ensuring ease of updates and maintenance.
