import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { truncatedTitle } from '../utils/truncate'
import Loader from './Loader';

import { FaHandHoldingDollar } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productsSlice';
import BasketCard from '../modules/BasketCard';

function ProductDetail() {
    const { id } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const product = useSelector(store => store.products.products.find(i => i.id === +id))
    if (!product) return <Loader />
  
    return (
        <div className=' min-h-screen  sm:w-[70%] p-5 mx-auto '>
            <Link to="/" className='flex items-center w-fit  p-2 hover:text-blue-500 '>
                <IoMdArrowRoundBack className='text-dark hover:scale-110 transition-all ease-in-out hover:text-blue-600 text-2xl' />
            </Link>
            <div className=' bg-white border border-black-100 rounded-lg p-2 m-3'>

                {product ? (
                    <div className=' '>
                        <div className=' md:flex md:flex-row flex flex-col justify-center items-center'>
                            <img src={product.image} className=' rounded-bl-3xl rounded-tr-3xl shadow-2xl rounded-md  size-64' />
                            <div className=" p-2 m-2 flex flex-col  ">
                                <h2 className='font-semibold w-full'>{truncatedTitle(product.title)}</h2>
                                <p className="text-slate-400 mt-2 flex items-center gap-x-2"> {product.category}</p>
                                <p className='text-slate-600 mt-2  text-black-400  rounded-md text-pretty'>{product.description}</p>
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