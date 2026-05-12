// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://rad.vg',
  integrations: [mdx(), sitemap()],

  vite: {
    ssr: {
      noExternal: ['@webtui/css']
    }
  },

  adapter: cloudflare(),
});
