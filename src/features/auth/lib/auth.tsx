import storage from '@/lib/storage';
import { StoreApi, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getUser } from '../api/get-user';
import { LoginInput, loginWithEmailAndPassword } from '../api/login';
import { logout } from '../api/logout';
import { RegisterInput, registerWithEmailAndPassword } from '../api/register';
import { AuthUser, UserResponse } from '../types';

type ZustandSet = StoreApi<AuthStoreType>['setState'];

async function userFn(set: ZustandSet) {
  if (storage.getToken()) {
    const user = await getUser();
    set((state) => ({ ...state, user }));
    return user;
  }
  return set((state) => ({ ...state, user: null }));
}

async function handleUserResponse(data: UserResponse) {
  const { user } = data;
  return user;
}

async function loginFn(data: LoginInput, set: ZustandSet) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  set((state) => ({ ...state, user }));
  return user;
}

async function registerFn(data: RegisterInput, set: ZustandSet) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  set((state) => ({ ...state, user }));
  return user;
}

async function logoutFn(set: ZustandSet) {
  await logout();
  set((state) => ({ ...state, user: null }));
  window.location.assign(window.location.origin as unknown as string);
}

export type AuthStoreType = {
  user: AuthUser | null;
  login: (data: LoginInput) => Promise<AuthUser>;
  register: (data: RegisterInput) => Promise<AuthUser>;
  logout: () => void;
};

export const useAuth = create(
  persist<AuthStoreType>(
    (set) => ({
      user: null,
      fetchUser: () => userFn(set),
      login: (data: LoginInput) => loginFn(data, set),
      register: (data: RegisterInput) => registerFn(data, set),
      logout: () => logoutFn(set),
    }),
    {
      name: 'ola',
    }
  )
);
