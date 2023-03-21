import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://grantbirki.github.io',
  base: '/astro-portfolio',
  trailingSlash: 'never',
  output: 'static',
});
