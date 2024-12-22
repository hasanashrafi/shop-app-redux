import React from 'react';
import { truncatedTitle } from '../utils/truncate';
import { FaTrash } from 'react-icons/fa6';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

function BasketCard({ product, dispatch }) {
    return (
        <div className="bg-green-100/30 shadow-md rounded-md p-2  w-full mt-4 flex flex-col gap-y-1 text-sm sm:text-base">
            <div className="gap-x-2 flex items-center  justify-around">
                <img src={product.image} alt={product.title} className="size-12 rounded-md" />
                <p className=' flex-1 text-xs'>{truncatedTitle(product.title)}</p>
                <span className="text-error-400 p-2 text-center rounded-full">
                    x{product.quantity}
                </span>
                <p className="text-green-500">${(product.price * product.quantity).toFixed(2)}</p>

                {product.quantity > 1 && (
                        <button
                            onClick={() => dispatch(decrease(product))}
                            className=' hover:text-blue-100 sm:text-2xl text-error-500 transition-all ease-in-out'>
                            -
                        </button>
                    )}
                    <span>{product.quantity}</span>
                    <button
                        onClick={() => dispatch(increase(product))}
                        className=' hover:text-blue-100 sm:text-2xl text-green-500 transition-all ease-in-out'>
                        +
                    </button>

                    <button
                        onClick={() => dispatch(removeItem(product))}
                        className=' text-error-200 rounded  hover:text-[#dd110a] transition-all ease-in-out'>
                        <FaTrash className='size-4' />
                    </button>
            </div>
          
        </div>
    );
}

export default BasketCard;