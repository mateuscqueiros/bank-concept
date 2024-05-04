import { DEFAULT_CATEGORY_VALUES } from "@/values/data";
import { create } from "zustand";
import { createSelectors } from "./utils";
import { CategoryFormType, CategoryType } from "@/features/categories";

interface CategoryStoreType {
  categories: CategoryType[];
  create: (values: CategoryType) => void
  update: (values: CategoryFormType, id: CategoryType['id']) => void
  delete: (id: CategoryType['id']) => void
}

const categoryStoreBase = create<CategoryStoreType>()((set) => ({
  categories: DEFAULT_CATEGORY_VALUES,
  create: (values) => set((state) => ({ ...state, categories: [...state.categories, values] })),
  update: (values, id) =>
    set((state) => {
      const other = state.categories.filter(t => t.id !== id)
      return { ...state, categories: [...other, { id, ...values }] }
    }),
  delete: (id) => {
    set((state) => {
      const other = state.categories.filter(t => t.id !== id)
      return { ...state, categories: other }
    })
  },
}))

export const useCategoryStore = createSelectors(categoryStoreBase)
