import React, { useEffect, useState } from 'react';
import loupe from '@assets/loupe.svg';
import FilterAugD from './filterhoc/FilterAugD';

const SearchDesktop = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const CompFilter = AugmentComp(UIButton, UIDropdown);
  return (
    <div>
      <form
        action='submit'
        className='flex justify-center mt-20'
        onSubmit={handleSubmit}
      >
        <div className='relative'>
          <input
            required
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            type='text'
            placeholder='Search for a roadmap'
            className='h-[75px] sm:w-[830px] bg-white z-10 rounded-full shadow-standard pl-20 text-2xl placeholder:font-roboto-text pb-[2px] focus:outline-none'
          />
          <img
            src={loupe}
            alt='LoupeSearch'
            className='absolute top-6 w-8 h-8 left-5'
          />
          <button
            type='submit'
            className='absolute z-10 right-[3%] top-[20.5%] bg-primary py-2.5 px-10 rounded-full text-white font-roboto-text'
          >
            Search
          </button>
        </div>
      </form>
      <FilterAugD />
    </div>
  );
};

export default SearchDesktop;
