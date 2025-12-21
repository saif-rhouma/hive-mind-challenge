'use server';

import { signupSchema, SignupFormData } from '@/lib/validation/signup.schema';

export async function registerUser(data: SignupFormData) {
  try {
    // Validate on server
    const parsedData = signupSchema.parse(data);
    console.log('Server validation passed:', parsedData);
    // Example: save to DB / do something with the data
    //
    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Server validation error:', error);
      return { success: false, message: error.message };
    }
    return { success: false, message: 'Registration failed' };
  }
}
