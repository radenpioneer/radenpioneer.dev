import { defineCollection, z } from 'astro:content'

export const collections = {
  site: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  works: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      url: z.string().url(),
    }),
  }),
}
