
import { axios } from "@/lib/api-client";
import { LoginFormType, RegisterFormType, TokenResponseType, UserType } from "../types";
import { storage } from "../lib";
import { toast } from "sonner";

export async function getUser() {
  return axios.get<UserType>('/users/me')

}
export async function postUser(data: RegisterFormType) {
  return axios.post<TokenResponseType>('/register', data)
}

export async function loginWithEmailAndPassword(data: LoginFormType) {
  return axios.post<TokenResponseType>('/login', data)
}

export function logout() {
  storage.clearToken()
  toast.success("Você foi deslogado")
}
