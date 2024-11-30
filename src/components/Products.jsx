
import { useProducts } from '../context/ProductContext'
import MiddleItems from '../modules/MiddleItems'
import ProductsCard from '../modules/ProductsCard'
import AnimatedScrollComponent from '../modules/Scroll'
import Loader from './Loader'


function Products() {

  const products = useProducts()
  console.log(products)

  return (
    <div className=' min-h-screen max-w-7xl mx-auto '>
      <AnimatedScrollComponent/>
      <div className='flex items-center flex-wrap justify-around gap-x-3 gap-y-3 my-10'>
        {
          !products.length && <Loader />
        }
        {
          products && products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))
        }
      </div>
    
    </div>
  )
}

export default Products