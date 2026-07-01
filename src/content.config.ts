import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    place: z.string(),
    author: z.string().optional().default(''),
    collective: z.string().optional().default(''),
    image: z.string(),
    description: z.string().optional().default(''),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { proyectos, pages };
