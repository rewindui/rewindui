import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import astroExpressiveCode from 'astro-expressive-code';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    remarkPlugins: [remarkToc],
  },
  integrations: [
    astroExpressiveCode({
      // Example: Change the theme to "dracula"
      theme: 'github-dark',
    }),
    mdx(),
    tailwind({ config: { applyBaseStyles: true } }),
    react({
      experimentalReactChildren: true,
    }),
  ],
});
