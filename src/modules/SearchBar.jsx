import React, { useState } from 'react';

import { CiSearch } from 'react-icons/ci';
import { LuSearchCheck } from 'react-icons/lu';

function SearchBar({ search, setSearch, setQuery }) {
  const [searchBox, setSearchBox] = useState(false);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }))
  }

  return (
    <div className='w-full justify-center flex items-center '>
      {
        searchBox ? (
          <LuSearchCheck className='size-6 sm:size-8 cursor-pointer text-dark mr-1' onClick={searchHandler} />
        ) : (
          <CiSearch className='size-6 sm:size-8 cursor-pointer text-dark mr-1' onClick={() => setSearchBox(!searchBox)} />
        )
      }

      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        value={search}
        type='text'
        placeholder='Search'
        className={`w-[80%] md:w-fit duration-300 transition-transform ease-in-out  rounded-xl h-[32px] px-2 py-0.5  text-dark outline-none border-[#e9e9e9] border transform ${searchBox ? 'scale-100' : 'scale-0'}`}
      />
    </div>
  );
}

export default SearchBar;
