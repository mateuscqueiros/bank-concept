'use client'

import { create } from "zustand";
import { createSelectors } from "@/stores/utils";
import { CategoryFormType, CategoryType } from "@/features/categories";
import { toast } from "sonner";
import { useTransactionStore } from "@/features/transactions";
import { DEFAULT_CATEGORY_VALUES } from '../values'

interface CategoryStoreType {
  categories: CategoryType[];
  create: (values: CategoryType) => void
  update: (values: CategoryFormType, id: CategoryType['id']) => void
  delete: (id: CategoryType['id']) => void
}

const categoryStoreBase = create<CategoryStoreType>()((set) => ({
  categories: DEFAULT_CATEGORY_VALUES,
  create: (values) => set((state) => {
    toast.success('Transação criada')
    return { ...state, categories: [...state.categories, values] }
  }),
  update: (values, id) =>
    set((state) => {
      const other = state.categories.filter(c => c.id !== id)
      toast.success('Transação atualizada')
      return { ...state, categories: [...other, { id, ...values }] }
    }),
  delete: (id) => {
    set((state) => {
      /* Não permitir Delete se houver apenas uma categoria */
      if (state.categories.length <= 1) {
        toast.error(
          "Apenas uma categoria restante, não é possível deletar.",
        );
        return state
      }
      const otherCategories = state.categories.filter(t => t.id !== id)

      /* Arrumar uma nova categoria para Transactions que tenham a categoria a ser deletada */
      const transactionStore = useTransactionStore.getState()
      const currentTransactions = transactionStore.transactions
      /* Nova categoria será a próxima ou 0 */
      const newCategoryId = Number(id) + 1 > state.categories.length - 1 ? 0 : id + 1
      const newTransactions = currentTransactions.map(t => {
        if (t.categoryId === id) {
          t.categoryId = String(newCategoryId)
        }
        return t
      })
      useTransactionStore.setState({ ...transactionStore, transactions: newTransactions })
      toast.success('Categoria deletada. Transações foram reassinaladas para a categoria ' + state.categories.find(c => c.id === newCategoryId)?.name)

      return { ...state, categories: otherCategories }
    })
  },
}))

export const useCategoryStore = createSelectors(categoryStoreBase)
