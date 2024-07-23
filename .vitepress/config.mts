import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mydocs",
  description: "random articles",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Migration guides', link: '/pelican-to-astro' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Astro', link: '/astro-overview' },
          { text: 'Pelican', link: '/pelican-overview' },
          { text: 'Vitepress', link: '/vitepress-overview' }
        ]
      },
      {
        text: 'Example Content',
        items: [
          { text: 'Tech Insights Vanilla', link: '/example-tech-insights-vanilla' },
          { text: 'Tech Insights Pelican', link: '/example-tech-insights-pelican' },
          { text: 'Tech Insights Vitepress', link: '/example-tech-insights-vitepress' },
          { text: 'Tech Insights Astro', link: '/example-tech-insights-astro' },
        ]
      },
      {
        text: 'Migration Guides',
        items: [
          { text: 'Pelican to Astro', link: '/pelican-to-astro' },
          { text: 'Pelican to Vitepress', link: '/pelican-to-vitepress' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/astrolicious/astro-tips.dev/issues/190' }
    ]
  }
})
