import React, { useState } from 'react';
import loupe from '@assets/loupe.svg';
import filter from '@assets/filter.svg';
import sort from '@assets/sortby.svg';
import SortBy from './SortBy';
import Filter from './Filter';

const Search = () => {
  const [clickFilter, setClickFilter] = useState(false);
  const [clickSort, setClickSort] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (stateVar: 'sort' | 'filter') => {
    if (stateVar === 'sort') {
      setClickSort((prev) => !prev);
    } else if (stateVar === 'filter') {
      setClickFilter((prev) => !prev);
    }

    const body = document.querySelector('body');
    if (stateVar === 'filter' && clickFilter) {
      body.style.overflow = 'auto';
    } else if (stateVar === 'sort' && clickSort) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  };

  console.log(clickSort);
  return (
    <div>
      <div>{clickSort && <SortBy handleClick={handleClick} />}</div>
      <div>
        {clickFilter && (
          <Filter
            handleClick={handleClick}
            options1={['Item1', 'Item2', 'Item3']}
            options2={['2Item1', '2Item2', '2Item3']}
            options3={['3Item1', '3Item2', '3Item3']}
          />
        )}
      </div>
      <form
        className='flex justify-center items-center mt-9 sm:mt-12'
        action='submit'
        onSubmit={handleSubmit}
      >
        <div className='relative'>
          <input
            type='text'
            className='rounded-full w-[273px] h-10 placeholder: text-[14px] pl-10 font-roboto-text outline-none shadow-standard sm:w-[375px] sm:h-12'
            placeholder='Search for a roadmap'
          />
          <img
            src={loupe}
            alt='searchIcon'
            className='absolute left-3 top-3 sm:top-[14px]'
          />
        </div>
      </form>
      <div className='flex justify-center items-center space-x-12 mt-7 sm:mt-9'>
        <button type='button' onClick={() => handleClick('filter')}>
          <div className='bg-primary flex justify-center items-center shadow-standard rounded-lg w-[90px] text-white h-[30px] sm:w-[122px] sm:h-[42px]'>
            <img
              src={filter}
              alt='filterButton'
              className='inline-block h-4 w-4 sm:h-5 sm:w-5'
            />
            <span className='font-roboto-text inline-block ml-[6px] text-[13px] sm:text-[16px] sm:ml-[8px]'>
              Filter
            </span>
          </div>
        </button>
        <button type='button' onClick={() => handleClick('sort')}>
          <div className='bg-primary flex justify-center items-center shadow-standard rounded-lg w-[90px] text-white h-[30px] sm:w-[122px] sm:h-[42px]'>
            <img
              src={sort}
              alt='filterButton'
              className='inline-block h-4 w-4'
            />
            <span className='font-roboto-text inline-block ml-[6px] text-[13px] sm:text-[16px] sm:ml-[8px]'>
              Sort By
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
