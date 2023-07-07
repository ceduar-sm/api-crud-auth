import { z } from 'zod'

export const userSchema = z.object({
  firstName: z
    .string({ required_error: 'Firstname is required' }),
  lastName: z
    .string({ required_error: 'Lastname is required' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ required_error: 'Email is invalid' })
})
