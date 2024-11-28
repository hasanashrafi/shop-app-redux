import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  const [searchBox, setSearchBox] = useState(false);

  return (
    <div className='flex items-center ml-2'>
      <BiSearch className='size-6 sm:size-8 cursor-pointer text-background' onClick={() => setSearchBox(!searchBox)} />
      <input
        type='text'
        placeholder='Search'
        className={`duration-300 transition-transform ease-in-out  rounded-xl h-[32px] px-2 py-0.5  text-background outline-none border-light border transform ${searchBox ? 'scale-100' : 'scale-0'}`}
      />
    </div>
  );
}

export default SearchBar;
