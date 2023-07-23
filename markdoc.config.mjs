import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
  },
})
