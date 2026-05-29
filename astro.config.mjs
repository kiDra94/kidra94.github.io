import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://kidra94.github.io',  
    integrations: [tailwind()],
});