import { axios } from '@/lib/api-client';

import { UserResponse } from '../types';
import { z } from 'zod';

export const registerInputSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
})

export type RegisterInput = z.infer<typeof registerInputSchema>

export const registerWithEmailAndPassword = (
  data: RegisterInput
): Promise<UserResponse> => {
  return axios.post('/register', data);
};

