// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publishDate: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        modifiedBy: fields.date({
          label: 'Modified By Date',
          validation: { isRequired: false },
        }),
        image: fields.image({
          label: 'Image',
          directory: 'src/assets/posts',
          publicPath: '~/assets/posts/',
          validation: { isRequired: false },
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/posts',
            publicPath: '~/assets/posts/',
          },
        }),
      },
    }),
  },
})
