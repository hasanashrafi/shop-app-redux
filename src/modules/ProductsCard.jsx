import React from 'react'
import { truncatedTitle } from '../utils/truncate'
import { TbShoppingBagCheck } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

function ProductsCard({ product }) {
  const description = product.description.split(' ').slice(0, 8).join(' ');

  return (
    <div className='shadow-md  w-64 h-96 my-2 rounded-md backdrop-blur-lg bg-[#f1f1d925] '>
      <div className='flex items-center justify-between p-1'>
        <p className='flex items-center'><TbShoppingBagCheck className='text-rate' />        {product.rating.count}</p>
        <p className='flex items-center'><FaStar className='text-rate' />        {product.rating.rate}</p>
      </div>
      <img src={product.image} className=' w-[95%] h-[176px] mx-auto' />
      <h1 className='text-center my-3 font-semibold text-primary'>{truncatedTitle(product.title)}</h1>
      <div className='p-2'>
        <p className='text-pretty'>
          {description}
        </p>
        <p className=' my-3 text-gray-500 '>
          {product.price}
        </p>
      </div>
    </div>
  )
}

export default ProductsCard