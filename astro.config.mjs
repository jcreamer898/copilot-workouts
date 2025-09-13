// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jcreamer898.github.io',
  base: '/copilot-workouts/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});