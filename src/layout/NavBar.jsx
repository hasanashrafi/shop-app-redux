import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BiTrash } from 'react-icons/bi';
import { CiShoppingCart } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';

import { useCard } from '../context/CardContext';
import { truncatedTitle } from '../utils/truncate';

const Navbar = () => {
    const [state, dispatch] = useCard()
  
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

    const handleRemoveItem = (product) => {
        dispatch({ type: "REMOVE_ITEM", payload: product });
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuRef]);

    return (
        <nav className="h-96 bg-center p-2 sm:h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-no-repeat sm:bg-cover sm:bg-center bg-[url('/images/header.jpg')]">
            <div className="mx-auto w-[95%] flex justify-between items-center">
                <div className="flex items-center text-background text-lg">
                    <div className="relative">
                        <div className="relative">
                            <CiShoppingCart className="size-8 cursor-pointer" onClick={handleCartToggle} />
                            {!!state.itemsCounter && (
                                <span className="absolute flex items-center justify-center top-0 right-0 text-sm bg-green-500 rounded-full p-0.5 size-4 text-center">
                                    {state.itemsCounter}
                                </span>
                            )}
                        </div>

                        {isHovered && (
                            <div className="absolute z-10 w-[350px] left-0 sm:w-[450px] sm:left-2 top-10 p-6 bg-background text-dark backdrop-blur-lg rounded-lg shadow-lg">
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
                                            <button onClick={() => handleRemoveItem(product)}>
                                                <BiTrash className="text-error-300 hover:text-error-500" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {!!state.total && (
                                    <div className="p-2 mt-5 flex items-center justify-between">
                                        <p className="text-dark">Total Price:</p>
                                        <p className="text-green-500 font-semibold">${state.total}</p>
                                    </div>
                                )}
                                {!!state.selectedItems.length && (
                                    <Link to="/checkout" className="block text-center w-full bg-green-500 mt-2 rounded-xl p-2 text-background">
                                        Check Out
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                    {/* <SearchBar /> */}
                </div>

                <div className="sm:hidden text-background">
                    <button onClick={handleMenuToggle} className="text-background focus:outline-none">
                        <RxHamburgerMenu className="size-6" />
                    </button>
                </div>
                <div ref={menuRef} className={`sm:flex ${isOpen ? 'fixed z-10 h-screen backdrop-blur-lg text-background w-1/2 right-0 top-0 bg-[#6dca512d]' : 'hidden'} md:items-center`}>
                    <div className="p-2 flex flex-col sm:flex-row sm:items-center justify-center">
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