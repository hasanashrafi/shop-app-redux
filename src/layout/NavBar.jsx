import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import SearchBar from "../modules/SearchBar"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    /**
     * The handleClickOutside function checks if a click event occurs outside a specified menu element
     * and closes the menu if it does.
     */
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

   /* The `useEffect` hook in the provided code snippet is used to add an event listener for the
   'mousedown' event on the document when the component mounts. The event listener is set to call
   the `handleClickOutside` function when a 'mousedown' event occurs. */
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className=" h-96 bg-center p-2 sm:h-[650px] bg-cover bg-no-repeat sm:bg-cover sm:bg-center  bg-[url('/images/header.jpg')]">
            <div className="flex justify-between items-center">
                <div className=" text-lg">
                    <SearchBar />
                </div>
                <div className="sm:hidden text-background">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <RxHamburgerMenu className='size-6' />
                    </button>
                </div>
                <div ref={menuRef} className={`sm:flex ${isOpen ? 'fixed h-screen backdrop-blur-lg text-background w-1/2 right-0 top-0 bg-[#caae512d] ' : 'hidden'} md:items-center`}>
                    <div className='p-2 flex flex-col sm:flex-row sm:items-center justify-center '>
                        <a href="#" className="mt-3 sm:m-0 hover:shadow-md rounded-md  hover:shadow-primary text-white px-4 py-1">Home</a>
                        <a href="#" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">About</a>
                        <a href="/products" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">Products</a>
                        <a href="#" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
