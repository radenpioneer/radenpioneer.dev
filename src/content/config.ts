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
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        url: z.string().url(),
        finishedBy: z.date(),
        image: image().optional(),
      }),
  }),
  posts: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.date(),
        modifiedBy: z.date().optional(),
        image: image().optional(),
      }),
  }),
}
