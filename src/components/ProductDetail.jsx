import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsDetail } from '../context/ProductContext'
import { truncatedTitle } from '../utils/truncate'
import { FaHandHoldingDollar } from 'react-icons/fa6';

function ProductDetail() {
    const { id } = useParams()

    const product = useProductsDetail(+id)
    console.log(product)



    return (
        <div className='min-h-screen p-5 mx-auto '>
            <p className="text-primary font-semibold p-0.5 border-b-2 border-primary w-fit mb-7">
                ProductDetail:
            </p>
            {product ? (
                <div className=' sm:flex'>
                    <div className='sm:flex sm:flex-row flex flex-col justify-center items-center'>
                        <img src={product.image} className='h-full rounded-bl-3xl rounded-tr-3xl shadow-2xl rounded-md  size-64' />
                        <div className=" p-2 m-2 flex flex-col  ">
                            <h2 className='font-semibold w-full'>{truncatedTitle(product.title)}</h2>
                            <p className="my-2 flex items-center gap-x-2"> {product.category}</p>
                            <p className="my-2 flex items-center gap-x-2"> <FaHandHoldingDollar className='text-xl' />{product.price}</p>
                            <p className='mt-3  text-dark p-2 rounded-md text-justify'>{product.description}</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    )
}

export default ProductDetail