import { z, defineCollection } from 'astro:content';

const components = defineCollection({
  type: 'content',
  schema: z.object({
    group: z.string(),
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    source: z.string(),
    theme: z.string(),
    variants: z.string(),
    polymorphic: z.boolean().optional(),
  }),
});
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    group: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  components,
  pages,
};
