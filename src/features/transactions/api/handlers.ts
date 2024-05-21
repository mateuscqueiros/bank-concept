import { axios } from "@/lib/api-client";
import { TransactionType } from "../types";

export async function getTransactions(): Promise<TransactionType[]> {
  return axios.get('/transactions').then(res => res.data)
}

export async function createTransaction(data: TransactionType): Promise<TransactionType> {
  return axios.post('/transactions', data).then(res => res.data)
}

export async function updateTransaction(id: TransactionType['id'], data: Omit<TransactionType, 'id'>): Promise<TransactionType> {
  return axios.put(`/transactions/${id}`, data).then(res => res.data)
}

export async function deleteTransaction(id: TransactionType['id']): Promise<TransactionType> {
  return axios.delete(`/transactions/${id}`).then(res => res.data)
}
