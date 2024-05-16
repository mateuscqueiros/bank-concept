import { UserResponse } from '@/features/auth';
import { getUser } from '@/features/auth/api/getUser';
import { LoginCredentialsDTO, loginWithEmailAndPassword } from '@/features/auth/api/login';
import { RegisterCredentialsDTO, registerWithEmailAndPassword } from '@/features/auth/api/register';
import storage from './storage';

async function handleUserResponse(data: UserResponse) {
  const { accessToken, user } = data;
  storage.setToken(accessToken);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}
