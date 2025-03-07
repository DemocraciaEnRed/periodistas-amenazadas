import { defineCollection, z } from "astro:content";

const testimonios = defineCollection({
  schema: z.object({
    name: z.string(),
    location: z.string(),
    imageUrl: z.string().url(),
    shortDesc: z.string(),
  }),
});

export const collections = { testimonios };
