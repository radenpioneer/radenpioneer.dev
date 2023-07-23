import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'

import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],
  compressHTML: process.env.VERCEL ? true : false,
  vite: {
    plugins: [svgr(), Icons({ compiler: 'jsx', jsx: 'react' })],
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ['node_modules'],
        },
      },
    },
  },
  experimental: {
    assets: true,
  },
})
