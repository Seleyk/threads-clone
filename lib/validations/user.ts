import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(1).max(30, { message: 'Maximum of 30 characters' }),
    username: z.string().min(3, { message: 'Minimum of 3 characters' }).max(30, { message: 'Maximum of 30 characters' }),
    bio: z.string().max(1000, { message: 'Max: 1000 characters' })
});