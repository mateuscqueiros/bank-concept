
import { axios } from "@/lib/api-client";
import { LoginFormType, RegisterFormType, UserResponseType, UserType } from "../types";
import { storage } from "../lib";
import { toast } from "sonner";

export async function getUser(): Promise<UserType | undefined> {
  return axios.get('/users/me').then(res => res.data)

}
export async function postUser(data: RegisterFormType): Promise<UserResponseType> {
  return axios.post('/register', data).then(res => res.data)
}

export async function loginWithEmailAndPassword(data: LoginFormType): Promise<UserResponseType> {
  return axios.post('/login', data).then(res => res.data)
}

export function logout() {
  storage.clearToken()
  toast.success("Você foi deslogado")
}
