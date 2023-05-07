import React from 'react';
import compass from '@assets/compassbutton.webp';

const Recenter = () => {
  return (
    <button
      className='absolute top-12 md:top-10 w-8 h-8 select-none'
      type='button'
      id='recenter-button'
    >
      <div className=' group'>
        <img
          draggable='false'
          src={compass}
          alt='compass'
          className='h-8 w-8'
        />
        <div className='text-secondary text-sm font-light w-20 left-[-24px] top-10 absolute group-hover:text-main group-hover:font-medium'>
          Recenter
        </div>
      </div>
    </button>
  );
};

export default Recenter;
