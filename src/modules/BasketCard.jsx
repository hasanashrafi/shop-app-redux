import React from 'react';
import { truncatedTitle } from '../utils/truncate';
import { FaTrash } from 'react-icons/fa6';

function BasketCard({ product, clickHandler }) {
    return (
        <div className="mt-4 flex flex-col gap-y-1">
            <div className="bg-green-100/30 shadow-md rounded-md p-2 flex items-center gap-x-2 justify-between">
                <img src={product.image} alt={product.title} className="size-12 rounded-md" />
                <p className='flex-1'>{truncatedTitle(product.title)}</p>
                <span className="text-error-400 p-2 text-center rounded-full">
                    x{product.quantity}
                </span>
                <p className="text-green-500">${(product.price * product.quantity).toFixed(2)}</p>

                <div className='flex items-center gap-x-3'>
                    {product.quantity > 1 && (
                        <button
                            onClick={() => clickHandler("DECREASE", product)}
                            className='text-2xl text-primary hover:text-[#180add] transition-all ease-in-out'>
                            -
                        </button>
                    )}
                    <span>{product.quantity}</span>
                    <button
                        onClick={() => clickHandler("INCREASE", product)}
                        className='text-2xl text-primary hover:text-[#180add] transition-all ease-in-out'>
                        +
                    </button>
                    <button
                        onClick={() => clickHandler("REMOVE_ITEM", product)}
                        className='text-error-200 rounded p-1 hover:text-[#dd110a] transition-all ease-in-out'>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;