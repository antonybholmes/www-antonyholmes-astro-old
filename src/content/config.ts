// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    authors: z.string().array(),
    categories: z.string().array(),
    hero: z.string(),
    heroCaption: z.string().optional(),
    tags: z.string().array(),
    rating: z.number(),
    pros: z.string().array(),
    cons: z.string().array(),
    details: z.string().array(),
    url: z.string().optional(),
    status: z.string().default("draft"),
    type: z.string().default("post"),
    related: z.string().array().optional(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
}
