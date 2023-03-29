import React, { useState } from 'react';

const sideBar = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    console.log('hovered');
    setHover((prev) => !prev);
  };

  return (
    <div
      className={
        hover
          ? 'bg-background w-32 min-h-full top-12 left-0 absolute transition-all ease-linear duration-100 drop-shadow-xl flex-col-4 gap-5 items-center justify-center'
          : 'bg-background w-12 min-h-full transition-all ease-linear duration-100 top-12 left-0 absolute drop-shadow-xl flex-col-4 gap-5 items-center justify-center m-auto'
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <ul className='flex-col-4 min-h-full w-full'>
        {hover ? (
          <li className='w-full'>
            <button name='Edit' type='button' className='w-full'>
              <img src='src/assets/edit.svg' alt='edit' />
            </button>
          </li>
        ) : (
          <li className='w-full'>
            <button type='button' className='w-full'>
              <img src='src/assets/edit.svg' alt='edit' />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default sideBar;

/*
<button name='Issues' type='button' className='w-full'>
          <img src='src/assets/issues.svg' alt='issues' />
        </button>
        <button name='Help' type='button' className='w-full'>
          <img src='src/assets/help.svg' alt='help' />
        </button>
        <button name='report' type='button' className='w-full'>
          <img src='src/assets/report.svg' alt='report' />
        </button>
*/
