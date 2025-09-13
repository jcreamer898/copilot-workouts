import { defineCollection, z } from 'astro:content';

// Define the schema for workout logs
const workoutLogSchema = z.object({
  title: z.string().optional(),
  date: z.date().optional(),
  duration: z.string().optional(),
  type: z.string().optional(),
  intensity: z.string().optional(),
  equipment: z.array(z.string()).optional(),
  muscles: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

// Define the schema for benchmarks
const benchmarkSchema = z.object({
  title: z.string().optional(),
  date: z.date().optional(),
  type: z.string().optional(),
  category: z.string().optional(),
  target: z.string().optional(),
  result: z.string().optional(),
  notes: z.string().optional(),
});

// Define the schema for plans
const planSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  duration: z.string().optional(),
  difficulty: z.string().optional(),
  goals: z.array(z.string()).optional(),
  frequency: z.string().optional(),
  equipment: z.array(z.string()).optional(),
});

// Define the schema for shared workouts
const sharedWorkoutSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  participants: z.number().optional(),
  duration: z.string().optional(),
  equipment: z.array(z.string()).optional(),
  difficulty: z.string().optional(),
});

// Define the schema for templates
const templateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  format: z.string().optional(),
  variables: z.array(z.string()).optional(),
  usage: z.string().optional(),
});

// Define collections
export const collections = {
  'workout-logs': defineCollection({
    type: 'content',
    schema: workoutLogSchema,
  }),
  'benchmarks': defineCollection({
    type: 'content',
    schema: benchmarkSchema,
  }),
  'plans': defineCollection({
    type: 'content',
    schema: planSchema,
  }),
  'shared-workouts': defineCollection({
    type: 'content',
    schema: sharedWorkoutSchema,
  }),
  'templates': defineCollection({
    type: 'content',
    schema: templateSchema,
  }),
};