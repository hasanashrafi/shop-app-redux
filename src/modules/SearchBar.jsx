import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { LuSearchCheck } from 'react-icons/lu';

function SearchBar({ search, setSearch, searchHandler }) {
  const [searchBox, setSearchBox] = useState(false);

  return (
    <div className='flex items-center ml-2'>
      {
        searchBox ? (
          <LuSearchCheck className='size-6 sm:size-8 cursor-pointer text-background mr-1' onClick={searchHandler} />
        ) : (
          <CiSearch className='size-6 sm:size-8 cursor-pointer text-background mr-1' onClick={() => setSearchBox(!searchBox)} />
        )
      }

      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        value={search}
        type='text'
        placeholder='Search'
        className={`duration-300 transition-transform ease-in-out  rounded-xl h-[32px] px-2 py-0.5  text-dark outline-none border-light border transform ${searchBox ? 'scale-100' : 'scale-0'}`}
      />

    </div>
  );
}

export default SearchBar;
