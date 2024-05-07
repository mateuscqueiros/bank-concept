'use client'

import { TransactionFormType, TransactionType } from "@/features/transactions";
import { create } from "zustand";
import { toast } from "sonner";
import { createSelectors } from '@/stores/utils'
import { DEFAULT_TRANSACTION_VALUES } from '../values'

interface TransactionStoreType {
  transactions: TransactionType[];
  create: (values: TransactionType) => void
  update: (values: TransactionFormType, id: TransactionType['id']) => void
  delete: (id: TransactionType['id']) => void
}

const transactionStoreBase = create<TransactionStoreType>()((set) => ({
  transactions: DEFAULT_TRANSACTION_VALUES,
  create: (values) => set((state) => {
    toast.success('Transação criada')
    return { ...state, transactions: [...state.transactions, values] }
  }),
  update: (values, id) =>
    set((state) => {
      const other = state.transactions.filter(t => t.id !== id)
      toast.success('Transação atualizada')
      return { ...state, transactions: [...other, { id, ...values }] }
    }),
  delete: (id) => {
    set((state) => {
      const other = state.transactions.filter(t => t.id !== id)
      return { ...state, transactions: other }
    })
    toast.success('Transação deletada')
  },
}))

export const useTransactionStore = createSelectors(transactionStoreBase)
