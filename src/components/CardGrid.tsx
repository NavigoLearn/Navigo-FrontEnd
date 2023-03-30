import React from 'react';

type Roamdmap2 = {
  name: string;
  madeby: string;
  nolikes: number;
  description: string;
};

const CardGrid = ({ name, madeby, nolikes, description }: Roamdmap2) => {
  return (
    <div className='bg-blue-400 justify-between h-[200px] relative rounded-lg'>
      {/* card go here */}
      <div className='flex justify-center items-center'>
        <h1 className='font-bold p-3 mt-1 text-xl'>{name}</h1>
        <div className='flex flex-col absolute right-[23px] text-[10px] top-[12px]'>
          <span className=''>Made by</span>
          <span>{madeby}</span>
        </div>
      </div>
      <div className='px-5 text-xs'>{description}</div>
      <div className='flex justify-center items-center'>
        <button
          type='button'
          className='absolute bottom-3 bg-white text-xs py-[6px] px-[24px] rounded-lg'
        >
          Explore
        </button>
      </div>
      <div className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-9 absolute bottom-[7px] right-[16px]'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
      </div>
    </div>
  );
};

export default CardGrid;
