import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IoMdArrowRoundBack } from 'react-icons/io'

import { checkout } from '../features/cart/cartSlice'
import BasketCard from '../modules/BasketCard'

function CheckOut() {
    const state = useSelector(store => store.cart)
    
    const dispatch = useDispatch()

    return (
        <div className='flex flex-col max-w-4xl p-4 mx-auto min-h-screen'>
            <Link to="/" className='flex items-center w-fit p-2 hover:text-blue-500'>
                <IoMdArrowRoundBack className='text-white text-2xl' />
            </Link>
            {!state.selectedItems.length ? (
                <p className="text-center p-3 bg-error-200 text-error-700 rounded-lg m-4">
                    Shopping Cart Is Empty
                </p>
            ) : (
                <div>
                    {state.selectedItems.map((product) => (
                        <BasketCard
                            key={product.id}
                            product={product}
                            dispatch={dispatch}
                        />
                    ))}

                    <div>
                        {!!state.total && (
                            <div className="p-2 mt-5 flex items-center justify-between">
                                <p className="text-dark">Total Price:</p>
                                <p className="text-green-500 font-semibold">${state.total}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {
                state.selectedItems.length >= 1 && (
                    <button
                        className='mt-10 hover:bg-green-600 transition-all ease-linear self-center w-1/2 p-2 bg-green-500 text-background text-center mx-auto rounded-md'
                        onClick={() => dispatch(checkout())}
                    >
                        Order Registration
                    </button>
                )
            }

        </div>
    )
}

export default CheckOut