'use client'

import { useMutation, useQuery } from "@tanstack/react-query";
import { TransactionType } from "../types";
import { queryClient } from "@/lib/query-client";
import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from "./handlers";

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => getTransactions().then(res => res.data),
    initialData: []
  })
}

type CreateTransactionMutationType = {
  data: TransactionType;
}

export function useCreateTransaction() {
  return useMutation({
    mutationFn: ({ data }: CreateTransactionMutationType) => createTransaction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true
      })
    }
  })
}

type UpdateTransactionMutationType = {
  data: Omit<TransactionType, 'id'>;
  id: TransactionType['id']
}

export function useUpdateTransaction() {
  return useMutation({
    mutationFn: ({
      id, data
    }: UpdateTransactionMutationType) => updateTransaction(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true
      })
    }
  })
}

type DeleteTransactionMutationType = {
  id: TransactionType['id']
}

export function useDeleteTransaction() {
  return useMutation({
    mutationFn: ({ id }: DeleteTransactionMutationType) => deleteTransaction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true
      })
    }
  })
}
