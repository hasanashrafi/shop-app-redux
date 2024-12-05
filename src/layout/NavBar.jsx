import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiShoppingCart } from 'react-icons/ci';
import { truncatedTitle } from '../utils/truncate';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Navbar = ({ state }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const menuRef = useRef(null);
    const links = [
        { href: "/", text: "Home" },
        { href: "/", text: "About" },
        { href: "/products", text: "Products" },
        { href: "/", text: "Contact" },
    ];

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCartToggle = () => {
        setIsHovered(!isHovered);
    };

    return (
        <nav className=" h-96 bg-center p-2 sm:h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-no-repeat sm:bg-cover sm:bg-center bg-[url('/images/header.jpg')]">
            <div className="mx-auto w-[95%] flex justify-between items-center">
                <div className="flex items-center text-background text-lg">
                    <div className="relative ">
                        <CiShoppingCart className='size-8 cursor-pointer' onClick={handleCartToggle} />
                        {isHovered && (
                            <div className="absolute w-[350px] left-0 sm:w-[450px] sm:left-2 top-10 p-6 bg-background text-dark backdrop-blur-lg rounded-lg shadow-lg">

                                {
                                    !state.selectedItems.length &&
                                    <p className='text-center p-3 bg-error-200 text-error-700 rounded-lg m-4'>
                                        Shopping Cart Is Empty
                                    </p>
                                }
                                {state.selectedItems.map((product) => (
                                    <div key={product.id} className='  mt-4 flex flex-col gap-y-1 '>
                                        <div className='bg-background rounded-md  p-2 flex items-center gap-x-2 justify-between'>
                                            
                                                <img src={product.image} className=' size-12 rounded-md' />

                                                                               
                                              <p>{truncatedTitle(product.title)}</p>
                                                <span className='  text-error-400 p-2  text-center rounded-full '>
                                                x{product.quantity}
                                                </span>
                                            <p className='text-green-500'>${product.price}</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                ))}
                                {
                                    !!state.total  && <div className='p-2 mt-5 flex items-center justify-between'>
                                        <p className='text-dark'>Total Price: </p>
                                        <p className='text-green-500 font-semibold'>${state.total}</p>
                                    </div>
                                }
                                <button className='w-full bg-green-500 mt-2 rounded-xl p-2 text-background'>CheckOut</button>
                            </div>

                        )}
                    </div>
                    {/* <SearchBar /> */}
                </div>

                <div className="sm:hidden text-background">
                    <button onClick={handleMenuToggle} className="text-background focus:outline-none">
                        <RxHamburgerMenu className='size-6' />
                    </button>
                </div>
                <div ref={menuRef} className={`sm:flex ${isOpen ? 'fixed z-10 h-screen backdrop-blur-lg text-background w-1/2 right-0 top-0 bg-[#6dca512d]' : 'hidden'} md:items-center`}>
                    <div className='p-2 flex flex-col sm:flex-row sm:items-center justify-center '>
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className={`mt-${index === 0 ? 3 : 5} sm:m-0 text-background px-4 py-1`}>
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;