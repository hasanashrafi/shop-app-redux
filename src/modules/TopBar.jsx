import React, { useState } from 'react'
import { BiCategory } from 'react-icons/bi';
import { GiBigDiamondRing, GiClothes, GiLoincloth } from 'react-icons/gi';
import { MdLaptopChromebook } from 'react-icons/md';

function TopBar({ setQuery }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { id: 1, name: 'All', icon: <BiCategory /> },
        { id: 2, name: "Men's Clothing", icon: <GiLoincloth /> },
        { id: 3, name: "Women's Clothing", icon: <GiClothes /> },
        { id: 4, name: 'Electronics', icon: <MdLaptopChromebook /> },
        { id: 5, name: 'jewelery', icon: <GiBigDiamondRing /> },
    ];

    const categoryHandler = (category) => {
        setSelectedCategory(category.id);
        setQuery((query) => ({ ...query, category: category.name.toLowerCase() }));
    };
    return (
        <div>
            <ul className='grid grid-cols-2 gap-3 md:flex md:items-center md:justify-around md:gap-x-3'>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => categoryHandler(category)}
                        className={` justify-center cursor-pointer flex items-center gap-x-1 rounded-xl p-2 ${selectedCategory === category.id ? 'bg-[#6C2BD9] text-background' : 'bg-[#f8f6fa] text-dark'}`}>
                        {category.icon}
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopBar