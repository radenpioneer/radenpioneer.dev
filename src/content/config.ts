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
    schema: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  pages: defineCollection({
    type: 'content',
    schema: ContentCollectionBase,
  }),
}
