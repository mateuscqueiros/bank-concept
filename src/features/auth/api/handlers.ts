import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, loginWithEmailAndPassword, postUser } from "./api";
import { queryClient } from "@/lib/query-client";
import { toast } from "sonner";
import { RegisterFormType } from "../types";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser().then(res => res.data),
  })
}

export function useCreateUser() {
  return useMutation({
    mutationKey: ["user-register"],
    mutationFn: (data: RegisterFormType) => postUser(data).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success("Usuário criado e logado!")
    },
    onError: (error: any) => {
      if (error.response.data) {
        toast.error(error.response.data)
      }
    }
  })
}

export function useLoginUser() {
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success("Bem-vindo de volta, " + res.data.user.name);
    },
    onError: (error: any) => {
      if (error.response.data) {
        toast.error(error.response.data)
      }
    }
  })
}

