import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),
    title: z.string(),
    place: z.string(),
    author: z.string(),
    description: z.string().optional(),
    image: z.string(),
    date: z.string(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { proyectos, pages };
