import { getAuthorizationHeaders } from "@/features/auth";
import Axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

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
  }
  return config
})

axios.interceptors.response.use(null, (error) => {
  console.log(error)
  if (error.response.status === 401) {
    toast.error("Você não está logado", {
      id: 'not-logged',
    })
  }
  return Promise.reject(error)
})

