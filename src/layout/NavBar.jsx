import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import SearchBar from "../modules/SearchBar";
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="h-96 bg-center p-2 sm:h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-no-repeat sm:bg-cover sm:bg-center bg-[url('/images/header.jpg')]">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-background text-lg">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative"
                    >
                        <CiShoppingCart className='size-8 cursor-pointer' />
                        {isHovered && (
                            <div className="absolute left-2 top-10 p-4 bg-background text-dark backdrop-blur-lg rounded shadow-lg">
                                Cart Details
                            </div>
                        )}
                    </div>
                    <SearchBar />
                </div>
                <div className="sm:hidden text-background">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-background focus:outline-none">
                        <RxHamburgerMenu className='size-6' />
                    </button>
                </div>
                <div ref={menuRef} className={`sm:flex ${isOpen ? 'fixed z-10 h-screen backdrop-blur-lg text-background w-1/2 right-0 top-0 bg-[#6dca512d]' : 'hidden'} md:items-center`}>
                    <div className='p-2 flex flex-col sm:flex-row sm:items-center justify-center '>
                        <a href="#" className="mt-3 sm:m-0 text-background px-4 py-1">Home</a>
                        <a href="#" className="mt-5 sm:m-0 text-background px-4 py-1">About</a>
                        <a href="/products" className="mt-5 sm:m-0 text-background px-4 py-1">Products</a>
                        <a href="#" className="mt-5 sm:m-0 text-background px-4 py-1">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
