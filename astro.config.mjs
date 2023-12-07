import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://radenpioneer-dev.vercel.app',
  compressHTML: process.env.NODE_ENV === 'production',
  integrations: [react(), markdoc(), sitemap(), partytown()],
  output: 'hybrid',
  adapter: vercel(),
  image: {
    domains: ['cdn.hashnode.com'],
  },
})
