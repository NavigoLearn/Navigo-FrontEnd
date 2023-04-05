import React, { useState } from 'react';
import dropclose from '@assets/cross.svg';

const sorts = [
  { sort: 'Likes', id: 1 },
  { sort: 'Trending', id: 2 },
  { sort: 'Views', id: 3 },
  { sort: 'Comments', id: 4 },
];

const SortByMenu = ({ clickSort, handleClick }) => {
  const [filterSelected, setFilterSelected] = useState('');
  console.log(filterSelected);

  return (
    <div className='min-h-screen w-full bg-background absolute top-0 z-30'>
      <div className='mt-6 flex items-center justify-between mx-11'>
        <h1 className='text-3xl font-kanit-text'>Sort roadmaps by</h1>
        <button
          type='button'
          onClick={() => handleClick('sort')}
          className='relative left-4'
        >
          <img src={dropclose} alt='dropclose' className='h-20 mr-2' />
        </button>
      </div>
      <ul className='text-2xl mx-12 mt-9 font-roboto-text'>
        {sorts.map((sort) => (
          <li key={sort.id} className='mt-6'>
            <div>
              <input
                type='radio'
                name='filter'
                id={sort.sort}
                className='h-5 w-5 mr-3'
                onClick={() => setFilterSelected(sort.sort)}
              />
              <label htmlFor={sort.sort}>{sort.sort}</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByMenu;
