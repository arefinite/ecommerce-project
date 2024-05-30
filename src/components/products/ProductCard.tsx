import { Product } from '@/types/products'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-center'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='h-24 w-fit flex justify-center'
          />
        </div>
        <CardTitle className='py-4'>{product.name}</CardTitle>
        <CardDescription>{product.brand}</CardDescription>
        <CardDescription>
          {product.category.at(0)?.toUpperCase() + product.category.slice(1)}
        </CardDescription>
        <CardDescription
          className={`font-bold ${
            product.stock ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {product.stock ? 'In Stock' : 'Out of Stock'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Price:{' '}
          <span
            className={product.discount > 0 ? 'line-through opacity-50' : ''}
          >
            ${product.price}
          </span>
          {product.discount > 0 && (
            <>
              / $
              {Math.floor(
                product.price - (product.price * product.discount) / 100
              )}{' '}
              {product.discount > 0 && (
                <sup className='text-red-500 font-bold'>
                  {product.discount}% off
                </sup>
              )}
            </>
          )}
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' size='sm'>
          View Details
        </Button>
        <Button size='sm'>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
export default ProductCard
