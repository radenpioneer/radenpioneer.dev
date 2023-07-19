import { ImageFunction, defineCollection, z } from 'astro:content'

const ContentCollectionBase = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: image().optional(),
  })

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: ContentCollectionBase,
  }),
}
