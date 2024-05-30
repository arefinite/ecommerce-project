import {useQuery} from '@tanstack/react-query'
import { getProducts, getProductById } from './api'

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })
}

export const useGetProductById = (id:string) => {
  return useQuery({
    queryKey: ['product',id],
    queryFn: ()=>getProductById(id)
  })
}