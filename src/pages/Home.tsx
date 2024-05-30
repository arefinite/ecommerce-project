import { Categories, DiscountedProducts, TopRatedProducts } from '@/components'
import Loader from '@/components/Loader'
import {  useGetProductsInfinite } from '@/services/queries'

const Home = () => {
  const { data, isPending, isError, error,fetchNextPage,isFetchingNextPage,hasNextPage } = useGetProductsInfinite()
  
  if (isPending)
    return (
      <div className='grid place-items-center py-8'>
        <Loader />
      </div>
    )
  if (isError)
    return (
      <div className='grid place-items-center py-8'>
        Something went wrong! {error.message}
      </div>
    )
  
  return (
    <main className='center py-8'>
      {
        data.pages.map((products, index)=>(
          <Categories key={index} products={products} fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} />
        ))
     }
      <DiscountedProducts />
      <TopRatedProducts />
    </main>
  )
}
export default Home
