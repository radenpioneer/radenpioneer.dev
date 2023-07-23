import { ImageFunction, defineCollection, z } from 'astro:content'

const ContentCollectionBase = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: image().optional(),
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
    schema: ContentCollectionBase,
  }),
}
