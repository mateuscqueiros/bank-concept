import { axios } from '@/lib/api-client';

import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('/users');
};

