import React from 'react'
import { Link } from 'react-router-dom';
import { useCard } from '../context/CardContext';
import { truncatedTitle } from '../utils/truncate'

import { TbShoppingBagCheck, TbShoppingBagExclamation, TbShoppingBagPlus } from 'react-icons/tb';
import { FaHandHoldingDollar, FaTrash } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

import { productQuantity } from '../utils/helper';

function ProductsCard({ product }) {
  const { id, title, price, image, rating } = product
  const [state, dispatch] = useCard()


  const quantity = productQuantity(state, id)
  console.log(quantity)

  const clickHandler = (type) => {
    dispatch({ type, payload: product })
  }



  return (
    <div className=' shadow-lg p-1 w-64 h-fit my-2 rounded-md backdrop-blur-lg bg-[#fff] '>
    
      <div className='flex items-center justify-between p-1'>
        <p className='flex items-center gap-x-2 p-1'>
          <TbShoppingBagCheck className='text-rate size-6' />
          {rating.count}
        </p>
        <p className='flex items-center gap-x-2 p-1'>
          <FaStar className='text-rate size-5' />
          {rating.rate}
        </p>
      </div>
     
      <img loading="lazy" src={image} className='bg-[#6b2bd928] p-0.5 rounded-bl-3xl rounded-tr-3xl  w-[95%] h-[200px] object-fill mx-auto' />
      <h1 className='text-center my-3 font-semibold text-primary'>
        {truncatedTitle(title)}
      </h1>
     
      <div className='p-2'>
        <p className='text-dark flex items-center gap-x-2  p-2 text-gray-500 '>
          <FaHandHoldingDollar className='text-xl' />
          {price}
        </p>
      </div>
    
      <div className='px-2 m-2 flex items-center justify-between'>
        <Link to={`/products/${id}`}>
          <TbShoppingBagExclamation className='text-dark text-3xl hover:text-[#180add] transition-all ease-in-out ' />
        </Link>

        <div className='flex items-center justify-between gap-x-3 transition-all ease-in-out'>
          {
            quantity > 1 && (
              <button
                onClick={() => clickHandler("DECREASE")}
                className=' text-2xl text-primary hover:text-[#180add] transition-all ease-in-out '>
                -
              </button>
            )
          }

          {
            quantity === 1 && (
              <button
                onClick={() => clickHandler("REMOVE_ITEM")}
                className=' text-error-200 rounded p-1 hover:text-[#dd110a] transition-all ease-in-out '>
                <FaTrash />
              </button>
            )
          }
          {
           !! quantity  &&
            <span>
              {quantity}
            </span>
          }

          {
            quantity === 0 ? (<button
              onClick={() => clickHandler("ADD_ITEM")}
              className=' text-primary hover:text-[#180add] transition-all ease-in-out '>
              <TbShoppingBagPlus className='text-3xl font-semibold' />
            </button>) : (
              <button
                onClick={() => clickHandler("INCREASE")}
                className=' text-2xl text-primary hover:text-[#180add] transition-all ease-in-out '>
                +
              </button>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProductsCard