import React, { useRef, useEffect } from 'react';

type ButtonProps = {
  id: number;
  onClick: () => void;
  title: string;
  cIcon: any;
};

const NewButtonDesktop = ({ id, onClick, title, cIcon }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // gets buttons coordinates
    const button = buttonRef.current;
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      console.log(buttonRect);
      const buttonY = buttonRect.top;
      const buttonX = buttonRect.left;
      console.log(buttonX, buttonY);
    }
  }, []);

  return (
    <li
      key={id}
      className='flex items-center justify-center text-center py-6  w-full '
    >
      <button
        ref={buttonRef}
        type='button'
        className='relative w-full flex justify-center   group/wrapper text-center text-2xl hover:underline'
        onClick={onClick}
      >
        <img
          draggable='false'
          src={cIcon}
          alt='icons sidebar'
          className=' w-8 h-8 select-none opacity-90 transition-all duration-200 ml-0 group-hover/wrapper:ml-4 '
        />

        <div className='absolute left-24 top-0 '>
          <h3 className='ml-0 transition-all duration-200 opacity-50 group-hover/wrapper:pl-4 group-hover/wrapper:opacity-100 '>
            {title}
          </h3>
        </div>
      </button>
    </li>
  );
};

export default NewButtonDesktop;
