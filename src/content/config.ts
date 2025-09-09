import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      email: z.string().email(),
      avatar: z.string().url().optional(),
    }),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      email: z.string().email(),
      avatar: z.string().url().optional(),
    }),
    client: z.object({
      name: z.string(),
      industry: z.string(),
      website: z.string().url().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    results: z.object({
      timeline: z.string().optional(),
      impact: z.array(z.string()).default([]),
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).default([]),
    }).optional(),
    canonicalUrl: z.string().url().optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedDomains: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      email: z.string().email(),
      avatar: z.string().url().optional(),
    }),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    pricing: z.object({
      startingPrice: z.string().optional(),
      model: z.string().optional(),
      features: z.array(z.string()).default([]),
    }).optional(),
    deliverables: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    relatedDomains: z.array(z.string()).default([]),
    processSteps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).default([]),
    canonicalUrl: z.string().url().optional(),
  }),
});

const domains = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      email: z.string().email(),
      avatar: z.string().url().optional(),
    }),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    industry: z.string(),
    challenges: z.array(z.string()).default([]),
    solutions: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    regulations: z.array(z.string()).default([]),
    keyMetrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().optional(),
    })).default([]),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies,
  services,
  domains,
};