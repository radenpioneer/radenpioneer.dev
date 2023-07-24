import { defineCollection, z } from 'astro:content'

const ContentCollectionBase = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
})

export const collections = {
  site: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        image: image(),
        navigation: z.array(
          z.object({
            id: z.string(),
            menu: z.array(
              z.object({
                name: z.string(),
                path: z.string(),
              })
            ),
          })
        ),
      }),
  }),
  pages: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      ContentCollectionBase.extend({
        image: image().optional(),
      }),
  }),
  blog: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      ContentCollectionBase.extend({
        date: z.date(),
        image: image().optional(),
        draft: z.boolean().optional(),
      }),
  }),
}
