import { z } from 'zod';

export const schema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(5, { message: 'Title should not exceed 5 characters' }),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(20, { message: 'Body should not exceed 20 characters' }),
});
