import { defineCollection, z } from "astro:content";

const videos = defineCollection({
  schema: z.object({
    title: z.string(),
    relatoUrl: z.string().url(),
    poster: z.string(),
  }),
});

export const collections = { videos };
