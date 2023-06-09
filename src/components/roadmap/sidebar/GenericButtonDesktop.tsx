import React from 'react';

type ButtonProps = {
  id: number;
  onClick: () => void;
  hover: boolean;
  title: string;
  cIcon: any;
};

const GenericButtonDesktop = ({
  id,
  onClick,
  hover,
  title,
  cIcon,
}: ButtonProps) => {
  return (
    <li key={id} className='flex items-center text-center ml-5'>
      <button
        type='button'
        className='w-full flex justify-self-center items-center text-center text-2xl hover:underline'
        onClick={onClick}
      >
        <img
          draggable='false'
          src={cIcon}
          alt='icons sidebar'
          className='mr-4 my-6 w-8 h-8 select-none'
        />
        {hover ? title : null}
      </button>
    </li>
  );
};

export default GenericButtonDesktop;
