import { axios } from "@/lib/api-client"
import { UserResponse } from "../types"
import { z } from "zod"

export const loginInputSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
})

export type LoginInput = z.infer<typeof loginInputSchema>

export const loginWithEmailAndPassword = (data: LoginInput): Promise<UserResponse> => {
  return axios.post('/users', data)
}
