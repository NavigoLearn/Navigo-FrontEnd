import React, { useState } from 'react';
import dropclose from '@assets/cross.svg';

const SortFilter = ({ clickFilter, handleClick }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selected1, setSelected1] = useState('Likes');
  return (
    <div className='min-h-screen w-full bg-background absolute top-0 z-30'>
      <div className='mt-6 flex items-center justify-between mx-11'>
        <h1 className='text-3xl font-kanit-text'>Filter roadmaps by</h1>
        <button
          type='button'
          onClick={() => handleClick('sort')}
          className='relative left-4'
        >
          <img src={dropclose} alt='dropclose' className='h-20 mr-2' />
        </button>
      </div>
      <div className='flex flex-col items-center relative font-roboto-text'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Sort By</label>
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          type='button'
          className='bg-white py-[6px] font-thin w-56 rounded-lg mt-4 shadow-standard flex justify-center items-center'
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
      </div>
    </div>
  );
};

export default SortFilter;
