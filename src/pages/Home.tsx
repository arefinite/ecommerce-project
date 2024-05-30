import { Categories, DiscountedProducts, TopRatedProducts } from '@/components'
import Loader from '@/components/Loader'
import { useGetProducts } from '@/services/queries'

const Home = () => {
  const { data: products, isPending, isError, error } = useGetProducts()
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
      <Categories products={products} />
      <DiscountedProducts />
      <TopRatedProducts />
    </main>
  )
}
export default Home
