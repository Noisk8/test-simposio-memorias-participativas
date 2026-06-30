import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const emptyCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {};
