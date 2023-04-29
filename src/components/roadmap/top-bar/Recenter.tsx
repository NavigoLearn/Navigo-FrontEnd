import React from 'react';
import compass from '@assets/compassbutton.webp';

const Recenter = () => {
  return (
    <button
      className='absolute top-10 w-8 h-8 select-none'
      type='button'
      id='recenter-button'
    >
      <img src={compass} alt='compass' className=' h-full ' />
      <div className=' text-secondary text-sm font-light  w-20 left-[-24px] top-10 absolute hover:text-main hover:font-medium '>
        Recenter
      </div>
    </button>
  );
};

export default Recenter;
