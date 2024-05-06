import { uuid } from "@/lib/utils";
import { TransactionFormType, TransactionType } from "../types";

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
