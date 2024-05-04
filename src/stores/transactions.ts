import { TransactionFormType, TransactionType } from "@/features/transactions";
import { DEFAULT_TRANSACTION_VALUES } from "@/values/data";
import { create } from "zustand";
import { createSelectors } from "./utils";

interface TransactionStoreType {
  transactions: TransactionType[];
  create: (values: TransactionType) => void
  update: (values: TransactionFormType, id: TransactionType['id']) => void
  delete: (id: TransactionType['id']) => void
}

const transactionStoreBase = create<TransactionStoreType>()((set) => ({
  transactions: DEFAULT_TRANSACTION_VALUES,
  create: (values) => set((state) => ({ ...state, transactions: [...state.transactions, values] })),
  update: (values, id) =>
    set((state) => {
      const other = state.transactions.filter(t => t.id !== id)
      return { ...state, transactions: [...other, { id, ...values }] }
    }),
  delete: (id) => {
    set((state) => {
      const other = state.transactions.filter(t => t.id !== id)
      return { ...state, transactions: other }
    })
  },
}))

export const useTransactionStore = createSelectors(transactionStoreBase)
