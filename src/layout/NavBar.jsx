import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import SearchBar from "../modules/SearchBar"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <nav className="text-primary p-2 shadow-md shadow-[#6dca5144]">
            <div className="flex justify-around items-center">
                <div className=" text-lg">
                    <SearchBar />
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <RxHamburgerMenu className='size-6' />
                    </button>
                </div>
                <div ref={menuRef} className={`sm:flex ${isOpen ? 'fixed h-screen backdrop-blur-lg w-1/2 right-0 top-0 bg-[#6dca512d] ' : 'hidden'} md:items-center`}>
                    <div className='p-2 flex flex-col sm:flex-row sm:items-center justify-center '>
                        <a href="#" className="mt-3 sm:m-0 hover:shadow-md rounded-md  hover:shadow-primary text-white px-4 py-1">Home</a>
                        <a href="#" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">About</a>
                        <a href="#" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">Services</a>
                        <a href="#" className="mt-5 sm:m-0 hover:shadow-md rounded-md hover:shadow-primary text-white px-4 py-1">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
