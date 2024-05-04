import { CategoryType } from "@/features/categories";
import { TransactionType } from "@/features/transactions";
import { uuid } from "@/lib/utils";

export const categories: CategoryType[] = [
  {
    id: 0,
    icon: "icon-car",
    name: "Carro",
    color: "text-primary",
  },
  {
    id: 1,
    icon: "icon-shirt",
    name: "Roupas",
    color: "text-secondary",
  },
  {
    id: 2,
    icon: "icon-kitchen",
    name: "Comida",
    color: "text-tertiary",
  },
  {
    id: 3,
    icon: "icon-shopping-cart",
    name: "Mercado",
    color: "text-secondary",
  },
];

export const transactions: TransactionType[] = [
  {
    id: uuid(),
    name: "Conserto do Carro",
    date: new Date("01/02/2023"),
    value: 200,
    categoryId: 0,
    type: "credit-card",
  },
  {
    id: uuid(),
    name: "Roupas novas",
    date: new Date("01/02/2024"),
    value: 300,
    categoryId: 1,
    type: "credit-card",
  },
  {
    id: uuid(),
    name: "Tênis novo",
    date: new Date(),
    value: 400,
    categoryId: 1,
    type: "debit-card",
  },
  {
    id: uuid(),
    name: "Guloseimas",
    date: new Date(),
    value: 50,
    categoryId: 2,
    type: "pix",
  },
  {
    id: uuid(),
    name: "Limpeza do carro",
    date: new Date(),
    value: 150,
    categoryId: 0,
    type: "credit-card",
  },
  {
    id: uuid(),
    name: "Camisas",
    date: new Date(),
    value: 200,
    categoryId: 2,
    type: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    type: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    type: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    type: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    type: "pix",
  },
];

export const initialTransactionFormValues = {
  name: "",
  date: new Date(),
  value: 0,
  type: "pix",
  categoryId: 0,
};

export const initialCategoryFormValues = {
  name: "",
  color: "primary",
  icon: "icon-shirt",
};

export const paymentMethods = [
  {
    name: "Pix",
    value: "pix",
  },
  {
    name: "Cartão de crédito",
    value: "credit-card",
  },
  {
    name: "Cartão de débito",
    value: "debit-card",
  },
];
