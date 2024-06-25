import { z } from 'zod';

export const schema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(2, { message: 'Title should not exceed 2 characters' }),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(3, { message: 'Body should not exceed 3 characters' }),
});
