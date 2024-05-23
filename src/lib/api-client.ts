import { getAuthorizationHeaders } from "@/features/auth";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3001",
  validateStatus: status => status >= 200 && status < 300
})

axios.interceptors.request.use((config) => {
  const authorizationHeaders = getAuthorizationHeaders() as any;
  if (authorizationHeaders) {
    config.headers = {
      ...config.headers, ...authorizationHeaders.headers
    }
    return config
  }
  return config
})

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error)
})

