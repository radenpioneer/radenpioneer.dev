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
        description: z.string(),
        image: image(),
      }),
  }),
  pages: defineCollection({
    type: 'content',
    schema: ContentCollectionBase,
  }),
}
