// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  site: 'https://inertiaorg.github.io/website/',
  base: '/website',
  integrations: [
      svelte(),
      icon(),
      mdx(),
  ],
});