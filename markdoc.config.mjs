import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config'
import shiki from '@astrojs/markdoc/shiki'

export default defineMarkdocConfig({
  extends: [shiki()],
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
  },
})
