import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, loginWithEmailAndPassword, postUser } from "./api";
import { queryClient } from "@/lib/query-client";
import { toast } from "sonner";
import { storage } from "../lib";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser
  })
}

export function useCreateUser() {
  return useMutation({
    mutationKey: ["user-create"],
    mutationFn: postUser,
    onSuccess: (data) => {
      storage.setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success("Usuário criado e logado!")
    },
    onError: (error: any) => {
      toast.error(error.response.data)
    }
  })
}

export function useLoginUser() {
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Bem-vindo de volta, " + data.user.firstName);
    },
    onError: (error: any) => {
      toast.error(error.response.data)
    }
  })
}

