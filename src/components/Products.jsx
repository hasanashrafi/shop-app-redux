
import { useProducts } from '../context/ProductContext'
import MiddleItems from '../modules/MiddleItems'
import ProductsCard from '../modules/ProductsCard'


function Products() {

  const products = useProducts()
  console.log(products)

  return (
    <div className=' min-h-screen max-w-7xl mx-auto '>
      <div className='flex items-center flex-wrap justify-around gap-x-3 gap-y-3 my-10'>
        {
          products && products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))
        }
      </div>
      <MiddleItems />
    </div>
  )
}

export default Products