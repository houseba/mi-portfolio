// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// Prueba
// https://astro.build/config
export default defineConfig({
  site: 'https://houseba.github.io',
  base: 'mi-portfolio',
  vite: {
    plugins: [tailwindcss()],
  }
});