// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aandhsolutions.com',
  redirects: {
    '/case-studies': '/en/case-studies',
    '/case-studies/': '/en/case-studies',
  },
  i18n: {
    locales: ['en', 'fr', 'de', 'es'],
    defaultLocale: 'en',
    fallback: {
      fr: 'en',
      de: 'en',
      es: 'en',
    },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      fallbackType: 'rewrite',
    },
  },
  integrations: [
    alpinejs(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
