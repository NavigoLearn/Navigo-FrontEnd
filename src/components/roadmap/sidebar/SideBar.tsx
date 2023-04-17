import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import buttons from './buttons';

const SideBar = () => {
  const [hover, setHover] = useState(false);
  const { editing } = useStore(roadmapState);

  const handleHover = (e) => {
    // set hover based on weather event is mouseenter or mouseleave
    setHover(e.type === 'mouseenter');
  };
  // TODO add 2 buttons with a green tick and a red x when editing
  return (
    <div
      className='w-48 h-full  top-0 absolute left-0'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`
      bg-white  h-full top-0 transition-all ease-linear duration-100 items-center justify-center gap-5 drop-shadow-xl flex-col-4 absolute left-0
       ${hover ? 'w-48' : 'w-20 m-auto'} 
        `}
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
                      className='w-10 flex justify-self-center items-center text-center text-2xl hover:underline'
                      onClick={button.clickHandler}
                    >
                      <img
                        src={button.cIcon}
                        alt='icons sidebar'
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
                    <button
                      type='button'
                      className='w-10 flex justify-self-center items-center text-center text-2xl hover:underline'
                    >
                      <img
                        src={button.cIcon}
                        alt='icons sidebar'
                        className='mr-4 my-6'
                      />
                    </button>
                  </li>
                );
              })}
          <li>{editing ? 'editing' : 'not editing'}</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
