import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import { getProducts, getProductById, getProductsInfinite } from './api'

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

export const useGetProductsInfinite = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: getProductsInfinite,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined
      }
      return firstPageParam - 1
    }
  })
}