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
        { id: 5, name: 'jewelery', icon: <GiBigDiamondRing  /> },
    ];

    const categoryHandler = (category) => {
        setSelectedCategory(category.id);
        setQuery((query) => ({ ...query, category: category.name.toLowerCase() }));
    };
    return (
        <div className='w-1/2 md:w-full'>
            <ul className=' flex items-center justify-between  gap-x-3'>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => categoryHandler(category)}
                        className={` justify-center cursor-pointer flex items-center gap-x-1 rounded-xl p-1.5 ${selectedCategory === category.id ? 'bg-[#6C2BD9] text-background' : 'bg-background text-dark'} transition-all ease-in-out`}>
                        {category.icon}
                       <span className='hidden md:block md:text-base'>{category.name}</span> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopBar