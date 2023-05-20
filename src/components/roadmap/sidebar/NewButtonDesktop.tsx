import React from 'react';

type ButtonProps = {
  id: number;
  onClick: () => void;
  title: string;
  cIcon: any;
};

const NewButtonDesktop = ({ id, onClick, title, cIcon }: ButtonProps) => {
  return (
    <li
      key={id}
      className='flex items-center justify-center text-center py-6  w-full '
    >
      <button
        type='button'
        className='  text-center text-2xl hover:underline'
        onClick={onClick}
      >
        <img
          draggable='false'
          src={cIcon}
          alt='icons sidebar'
          className=' w-8 h-8 select-none'
        />
      </button>
    </li>
  );
};

export default NewButtonDesktop;
