import React, { useState } from 'react';
// installed react-icons library
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const GridFilters = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected1, setSelected1] = useState('Likes');
  const [selected2, setSelected2] = useState(9);

  return (
    <div className='grid grid-cols-3 mt-9 px-40'>
      <div className='flex flex-col items-center'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Sort By</label>
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          type='button'
          className='bg-white py-[6px] font-thin w-56 rounded-lg mt-4 shadow-md flex items-center justify-center'
        >
          {selected1}
          {isOpen1 ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 ml-[190px] absolute text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 ml-[190px] absolute text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </button>
        {isOpen1 && (
          <ul className='p-1 bg-white rounded-lg mt-1 w-[220px] flex flex-col items-center justify-center text-[14.5px]'>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected1('Likes')}
            >
              Likes
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected1('Trending')}
            >
              Trending
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected1('Views')}
            >
              Views
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected1('Comments')}
            >
              Comments
            </button>
          </ul>
        )}
      </div>

      <div className='flex flex-col items-center'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Results per page</label>
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          type='button'
          className='bg-white py-[6px] font-thin w-56 rounded-lg mt-4 shadow-md flex items-center justify-center'
        >
          {selected2}
          {isOpen2 ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 ml-[190px] absolute text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 ml-[190px] absolute text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </button>
        {isOpen2 && (
          <ul className='p-1 bg-white rounded-lg mt-1 w-[220px] flex flex-col items-center justify-center text-[14.5px]'>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected2(4)}
            >
              4
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected2(2)}
            >
              2
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected2(9)}
            >
              9
            </button>
            <button
              type='button'
              className='font-thin py-[4px]'
              onClick={() => setSelected2(6)}
            >
              6
            </button>
          </ul>
        )}
      </div>

      <div className='flex flex-col items-center'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Tags</label>
      </div>
    </div>
  );
};

export default GridFilters;
