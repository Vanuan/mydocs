---
outline: deep
---

# Pelican Overview

Pelican is a static site generator designed for simplicity and flexibility. It is written in Python and uses reStructuredText (RST) and Markdown for content creation, making it suitable for technical documentation and blog posts alike.

## Key Points

### Content Organization

- **Markdown and reStructuredText Support**: Pelican supports both Markdown and reStructuredText (RST) for content creation, giving users the flexibility to choose their preferred markup language. It adheres to the CommonMark specification for Markdown and Docutils for RST.
- **Content-First Approach**: Pelican emphasizes a content-first approach, allowing easy management of Markdown and RST files.

### Customization

#### Content Organization, Settings and Metadata

- **Configuration Files**: Pelican uses configuration files like `pelicanconf.py` and `publishconf.py` to manage settings and customization options for your site.
- **Front Matter (Metadata)**:
  - **Standardized Metadata**: Metadata in Pelican is managed through fields in Markdown files and directive fields in RST files. This includes fields like title, date, tags, and more.
  - **Global Content and Metadata**: Global settings and metadata are configured in the configuration files, allowing site-wide customization and global constants and text blocks.

#### Templating and Styling

- **Jinja Templates**: Pelican uses Jinja templates for layout and content organization. This allows for extensive customization and flexibility in how content is presented.
- **Theming**: Pelican supports theming, with a variety of themes available and the option to create custom themes. Styling is managed through standard CSS, and users can extend the functionality with plugins.

## Practical Example

To illustrate the Pelican, here’s a simple example:

### Pelican Markdown File

```markdown
---
title: My Pelican Post
date: 2023-07-20
tags: [pelican, example]
---

# Hello from Pelican

This is a sample post written in Markdown.
```

### Pelican Configuration

Pelican typically uses a configuration file such as `pelicanconf.py` to manage settings:


```python
# pelicanconf.py

AUTHOR = 'Your Name'
SITENAME = 'My Pelican Site'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
```

## More

Check out the [Pelican documentation](https://docs.getpelican.com/en/stable/) for the full list of features and customization options.
