import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductsDetail } from '../context/ProductContext'
import { truncatedTitle } from '../utils/truncate'
import { FaHandHoldingDollar } from 'react-icons/fa6';
import Loader from './Loader';
import { BiLeftArrow } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';

function ProductDetail() {
    const { id } = useParams()

    const product = useProductsDetail(+id)


    if (!product) return <Loader />

    return (
        <div className='min-h-screen w-1/2 sm:w-[70%] p-5 mx-auto '>
         <Link to="/" className='flex items-center w-fit  p-2 hover:text-blue-500 '>
         <IoMdArrowRoundBack  className='text-white text-2xl'/> 
         </Link>
          <div className='  border border-black-100 rounded-lg p-2 m-3'>
          
            {product ? (
                <div className=' '>
                    <div className=' md:flex md:flex-row flex flex-col justify-center items-center'>
                        <img src={product.image} className='h-full rounded-bl-3xl rounded-tr-3xl shadow-2xl rounded-md  size-64' />
                        <div className=" p-2 m-2 flex flex-col  ">
                            <h2 className='font-semibold w-full'>{truncatedTitle(product.title)}</h2>
                            <p className="mt-2 flex items-center gap-x-2"> {product.category}</p>
                            <p className='mt-2  text-black-400  rounded-md text-pretty'>{product.description}</p>
                            <p className="mt-3 flex items-center gap-x-2 bg-green-500 w-fit rounded-md text-lg text-background p-1"> <FaHandHoldingDollar className='text-xl' />{product.price}</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Product not found.</p>
            )}
          </div>
        </div>
    )
}

export default ProductDetail