import { defineCollection, z } from 'astro:content'

export const collections = {
  works: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        url: z.string().url(),
        finishedBy: z.date(),
        image: image().optional(),
      }),
  }),
}
