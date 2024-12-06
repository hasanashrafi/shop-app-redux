import React from 'react'
import { Link } from 'react-router-dom'

import { useCard } from '../context/CardContext'
import { truncatedTitle } from '../utils/truncate'

import { FaTrash } from 'react-icons/fa6'
import { IoMdArrowRoundBack } from 'react-icons/io'

function CheckOut() {
    const [state, dispatch] = useCard()
    const clickHandler = (type, product) => {
        dispatch({ type, payload: product })
    }

    return (
        <div className='flex flex-col  max-w-4xl p-4 mx-auto min-h-screen'>
            <Link to="/" className='flex items-center w-fit  p-2 hover:text-blue-500 '>
                <IoMdArrowRoundBack className='text-white text-2xl' />
            </Link>
            {!state.selectedItems.length && (
                <p className="text-center p-3 bg-error-200 text-error-700 rounded-lg m-4">
                    Shopping Cart Is Empty
                </p>
            )}
            {state.selectedItems.map((product) => (
                <div key={product.id} className="mt-4 flex flex-col gap-y-1">
                    <div className="bg-background rounded-md p-2 flex items-center gap-x-2 justify-between">
                        <img src={product.image} className="size-12 rounded-md" />
                        <p>{truncatedTitle(product.title)}</p>
                        <span className="text-error-400 p-2 text-center rounded-full">
                            x{product.quantity}
                        </span>
                        <p className="text-green-500">${product.price}</p>

                        <div className='flex items-center gap-x-3'>
                            {product.quantity > 1 && (
                                <button
                                    onClick={() => clickHandler("DECREASE", product)}
                                    className='text-2xl text-primary hover:text-[#180add] transition-all ease-in-out'>
                                    -
                                </button>
                            )}
                            {!!product.quantity &&
                                <span>
                                    {product.quantity}
                                </span>
                            }
                            <button
                                onClick={() => clickHandler("INCREASE", product)}
                                className='text-2xl text-primary hover:text-[#180add] transition-all ease-in-out'>
                                +
                            </button>
                        </div>
                        {product.quantity > 0 && (
                            <button
                                onClick={() => clickHandler("REMOVE_ITEM", product)}
                                className='text-error-200 rounded p-1 hover:text-[#dd110a] transition-all ease-in-out'>
                                <FaTrash />
                            </button>
                        )}
                    </div>
                </div>
            ))}

            <div>
                {!!state.total && (
                    <div className="p-2 mt-5 flex items-center justify-between">
                        <p className="text-dark">Total Price:</p>
                        <p className="text-green-500 font-semibold">${state.total}</p>
                    </div>
                )}
            </div>

            <button className='mt-10 hover:bg-green-600 transition-all ease-linear self-center w-1/2 p-2 bg-green-500 text-background text-center mx-auto rounded-md' onClick={() => clickHandler("CHECK_OUT")}>
                order registration
            </button>
        </div>
    )
}

export default CheckOut