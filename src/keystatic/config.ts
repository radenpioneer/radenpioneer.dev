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
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publishDate: fields.date({
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        modifiedBy: fields.date({
          label: 'Modified By Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: false },
        }),
        hidden: fields.checkbox({ label: 'Hidden', defaultValue: false }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: true }),
        tags: fields.array(fields.slug({ name: { label: 'Tag' } }), {
          label: 'Tags',
          itemLabel: ({ value }) => value.name,
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
