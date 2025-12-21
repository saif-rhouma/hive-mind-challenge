import { z } from 'zod';

export const signupSchema = z.object({
  firstname: z.string().min(2, 'First name is required'),
  lastname: z.string().min(2, 'Last name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type SignupFormData = z.infer<typeof signupSchema>;
