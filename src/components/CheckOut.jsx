import React from 'react'
import { Link } from 'react-router-dom'

import { useCard } from '../context/CardContext'
import BasketCard from '../modules/BasketCard'

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
                <BasketCard key={product.id} product={product} clickHandler={clickHandler}  />
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