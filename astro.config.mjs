import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.radenpioneer.blog',
  compressHTML: process.env.NODE_ENV === 'production',
  integrations: [react()],
})
