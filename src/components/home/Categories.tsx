import { Product } from '@/types/products'
import { Button } from '../ui/button'
import ProductCard from '../products/ProductCard'
import { useState } from 'react'

type Props = {
  products: Product[]
}

const Categories = ({ products }: Props) => {
  const [selectedCategory,setSelectedCategory] = useState<string>('all')
  const categories = [
    'all',
    ...new Set([...products.map(product => product.category)]),
  ]
  const selectedProduct = selectedCategory === 'all' ? products : products.filter(product=>product.category === selectedCategory)
  return (
    <main>
      <ul className='flex gap-4 flex-wrap justify-center'>
        {categories.map(category => (
          <li key={category}>
            <Button variant='outline' onClick={()=>setSelectedCategory(category)}>
              {category.at(0)?.toUpperCase() + category.slice(1)}
            </Button>
          </li>
        ))}
      </ul>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8'>
        {selectedProduct.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
export default Categories
