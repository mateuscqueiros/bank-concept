import { CategoryType } from "@/features/categories";
import { TransactionFormType, TransactionType } from "@/features/transactions";
import { uuid } from "@/lib/utils";

export const DEFAULT_CATEGORY_VALUES: CategoryType[] = [
  {
    id: 0,
    icon: "icon-car",
    name: "Carro",
    color: "primary",
  },
  {
    id: 1,
    icon: "icon-shirt",
    name: "Roupas",
    color: "secondary",
  },
  {
    id: 2,
    icon: "icon-kitchen",
    name: "Comida",
    color: "tertiary",
  },
  {
    id: 3,
    icon: "icon-shopping-cart",
    name: "Mercado",
    color: "secondary",
  },
];

export const DEFAULT_TRANSACTION_VALUES: TransactionType[] = [
  {
    id: uuid(),
    name: "Conserto do Carro",
    date: new Date("01/02/2023"),
    value: 200,
    categoryId: 0,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Roupas novas",
    date: new Date("01/02/2024"),
    value: 300,
    categoryId: 1,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Tênis novo",
    date: new Date(),
    value: 400,
    categoryId: 1,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Guloseimas",
    date: new Date(),
    value: 50,
    categoryId: 2,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Limpeza do carro",
    date: new Date(),
    value: 150,
    categoryId: 0,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Camisas",
    date: new Date(),
    value: 200,
    categoryId: 2,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    paymentType: "pix",
  },
  {
    id: uuid(),
    name: "Mercado",
    date: new Date(),
    value: 230,
    categoryId: 3,
    paymentType: "pix",
  },
];

export const DEFAULT_TRANSACTION_FORM_VALUES: TransactionFormType = {
  name: "",
  date: new Date(),
  value: 0,
  paymentType: "pix",
  categoryId: 0,
};

export const DEFAULT_CATEGORY_FORM_VALUES = {
  name: "",
  icon: "icon-shirt",
  color: "primary",
};

export const CATEGORY_COLORS = [
  {
    name: "Primária",
    value: "primary",
  },
  {
    name: "Secundária",
    value: "secondary",
  },
  {
    name: "Terciária",
    value: "tertiary",
  },
];

export const CATEGORY_ICONS = [
  {
    name: "Roupas",
    value: "icon-shirt",
  },
  {
    name: "Carro",
    value: "icon-car",
  },
  {
    name: "Alimentos",
    value: "icon-kitchen",
  },
  {
    name: "Supermecado",
    value: "icon-shopping-cart",
  },
];

export const PAYMENT_METHODS = [
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
