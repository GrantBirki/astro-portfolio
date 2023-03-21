import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-portfolio.birki.io',
  base: '/',
  trailingSlash: 'never',
  output: 'static',
});
