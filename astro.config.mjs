import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "static",
  outDir: "./docs",
  base: "EPIKWEBSIT3/docs",
  site: "https://givyff123.github.io"
});