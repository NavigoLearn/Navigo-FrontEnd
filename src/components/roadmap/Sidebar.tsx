import React, { useState } from 'react';
import buttons from './Buttons';

const sideBar = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    // console.log('hovered');
    setHover((prev) => !prev);
  };

  return (
    <div
      className={`
      bg-white min-h-full transition-all ease-linear duration-100 items-center justify-center gap-5 drop-shadow-xl flex-col-4 absolute top-16 left-0
       ${hover ? 'w-56' : 'w-20 m-auto'} 
        `}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <ul className='flex-col-4 min-h-full w-full gap-10 justify-self-center items-center '>
        {hover
          ? buttons.map((button) => {
              return (
                <li
                  key={button.id}
                  className='flex items-center text-center ml-5'
                >
                  <button
                    type='button'
                    className={button.cName}
                    onClick={button.clickHandler}
                  >
                    <img
                      src={button.cIcon}
                      alt={button.cName}
                      className='mr-4 my-6'
                    />
                    {button.title}
                  </button>
                </li>
              );
            })
          : buttons.map((button) => {
              return (
                <li
                  key={button.id}
                  className='flex items-center text-center ml-5'
                >
                  <button type='button' className={button.cName}>
                    <img
                      src={button.cIcon}
                      alt={button.cName}
                      className='mr-4 my-6'
                    />
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default sideBar;
