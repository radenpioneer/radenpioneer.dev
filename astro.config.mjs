import { defineConfig } from 'astro/config'

// Astro Integrations
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import sitemap from '@astrojs/sitemap'
import pwa from '@vite-pwa/astro'

// Vite Plugins
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// manifest.json
import manifest from './src/components/scripts/manifest.json' assert { type: 'json' }

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.radenpioneer.blog',
  integrations: [
    react(),
    markdoc(),
    sitemap(),
    pwa({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src/components/scripts',
      filename: 'sw.ts',
      manifest,
    }),
  ],
  compressHTML: process.env.VERCEL ? true : false,
  redirects: {
    '/work': '/soon',
    '/blog': '/soon',
    '/contact': '/soon',
  },
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
