import { defineConfig } from 'astro/config'

// Astro Integrations
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import sitemap from '@astrojs/sitemap'
import pwa from '@vite-pwa/astro'
import compress from 'astro-compress'

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
    compress({
      html: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        conservativeCollapse: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        sortClassName: true,
      },
    }),
  ],
  redirects: {
    '/work': '/soon',
    '/blog': '/blog/1',
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
