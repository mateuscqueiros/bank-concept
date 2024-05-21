import { axios } from "@/lib/api-client";
import { CategoryType } from "../types";

export async function getCategories(): Promise<CategoryType[]> {
  return axios.get('/categories').then(res => res.data)
}

export async function createCategory(data: CategoryType): Promise<CategoryType> {
  return axios.post('/categories', data).then(res => res.data)
}

export async function updateCategory(id: CategoryType['id'], data: Omit<CategoryType, 'id'>): Promise<CategoryType> {
  return axios.put(`/categories/${id}`, data).then(res => res.data)
}

export async function deleteCategory(id: CategoryType['id']): Promise<CategoryType> {
  return axios.delete(`/categories/${id}`).then(res => res.data)
}
