import { defineCollection, z } from "astro:content";

const testimonios = defineCollection({
  schema: z.object({
    name: z.string(),
    location: z.string(),
    imageUrl: z.string().url(),
    shortDesc: z.string(),
  }),
});

const capacitaciones = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    author: z.string()
  }),
});

export const collections = { testimonios, capacitaciones };
