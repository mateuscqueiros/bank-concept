import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import storage from './storage';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (config.headers) {
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
  }
  return config;
}


export const axios = Axios.create({
  baseURL: "http://localhost:3000"
})

axios.interceptors.request.use(authRequestInterceptor);
