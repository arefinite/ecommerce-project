import { Product } from '@/types/products'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({ baseURL })

export const getProducts = async () => {
  return (await apiClient.get<Product[]>(`${baseURL}/products`)).data
}

export const getProductById = async (id: string) => {
  return (await apiClient.get<Product>(`${baseURL}/products/${id}`)).data
}

