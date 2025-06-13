// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://radsteve.net',
  integrations: [mdx(), sitemap()],

  vite: {
    ssr: {
      noExternal: ['@webtui/css']
    }
  },
});
