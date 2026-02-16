// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

  
export default defineConfig({
  site: 'https://Lemus.github.io',
  base: 'mi-repo',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
