import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.radenpioneer.blog',
  compressHTML: process.env.NODE_ENV === 'production',
  integrations: [react(), markdoc()],
  output: 'hybrid',
  adapter: vercel(),
})
