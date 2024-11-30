import React from 'react'
import { truncatedTitle } from '../utils/truncate'
import { TbShoppingBagCheck, TbShoppingBagExclamation, TbShoppingBagPlus } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHandHoldingDollar } from 'react-icons/fa6';

function ProductsCard({ product }) {
  const description = product.description.split(' ').slice(0, 8).join(' ');

  return (
    <div className=' shadow-lg p-1 w-64 h-fit my-2 rounded-md backdrop-blur-lg bg-[#fff] '>
      <div className='flex items-center justify-between p-1'>
        <p className='flex items-center gap-x-2 p-1'>
          <TbShoppingBagCheck className='text-rate size-6' />
          {product.rating.count}
        </p>
        <p className='flex items-center gap-x-2 p-1'>
          <FaStar className='text-rate size-5' />
          {product.rating.rate}
        </p>
      </div>
      <img src={product.image} className='bg-[#dde4dde8] p-1 rounded-bl-3xl rounded-tr-3xl  w-[95%] h-[235px] mx-auto' />
      <h1 className='text-center my-3 font-semibold text-primary'>{truncatedTitle(product.title)}</h1>
      <div className='p-2'>
        {/* <p className='text-pretty'>
          {description}
        </p> */}
        <p className='text-dark flex items-center gap-x-2  p-2 text-gray-500 '>
          <FaHandHoldingDollar className='text-xl' />
          {product.price}
        </p>

      </div>
      <div className='px-2 m-2 flex items-center justify-between'>
        <Link to={`/products/${product.id}`}>
          <TbShoppingBagExclamation className='text-dark text-3xl hover:text-[#0a42dd] transition-all ease-in-out ' />
        </Link>

        <button className=' text-primary hover:text-[#0add0a] transition-all ease-in-out '>
          <TbShoppingBagPlus className='text-3xl font-semibold' />
        </button>
      </div>
    </div>
  )
}

export default ProductsCard