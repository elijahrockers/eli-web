// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elijahrockers.github.io',
  base: '/eli-web/',
  vite: {
    plugins: [tailwindcss()]
  }
});
