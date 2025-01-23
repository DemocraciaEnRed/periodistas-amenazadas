import { defineCollection, z } from "astro:content";

const videos = defineCollection({
  schema: z.object({
    name: z.string(),
    videoUrl: z.string().url(),
    poster: z.string(),
  }),
});

export const collections = { videos };
