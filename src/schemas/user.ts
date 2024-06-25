import { z } from 'zod';

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
});

export type User = z.infer<typeof userSchema>;
