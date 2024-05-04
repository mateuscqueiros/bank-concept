import { CategoryType } from "@/features/categories";
import { TransactionType } from "@/features/transactions";

export type DataContextType = {
  transactions: CRUD<TransactionType>;
  categories: CRUD<CategoryType>;
};

type CRUD<T extends CategoryType | TransactionType> = {
  data: T[];
  add: (value: T) => void;
  update: (id: T['id'], values: Omit<T, 'id'>) => void;
  delete: (id: T['id']) => void;
};

