// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: 'https://democraciaenred.github.io/',
  site: 'https://periodistasamenazadas.fopea.org/',
  base: '',
  integrations: [tailwind(), icon()]
});