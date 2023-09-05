import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.radenpioneer.blog',
  compressHTML: process.env.NODE_ENV === 'production',
  integrations: [],
})
