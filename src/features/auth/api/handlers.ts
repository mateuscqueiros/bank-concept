'use client'

import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, loginWithEmailAndPassword, postUser } from "./api";
import { queryClient } from "@/lib/query-client";
import { toast } from "sonner";
import { RegisterFormType } from "../types";
import { storage } from "../lib";
import { useRouter } from "next/navigation";

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
  const router = useRouter()
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (res) => {
      storage.setToken(res.data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/')
      toast.success("Bem-vindo de volta, " + res.data.user.name);
    },
    onError: (error: any) => {
      if (error.response.data) {
        toast.error(error.response.data)
      }
    }
  })
}

