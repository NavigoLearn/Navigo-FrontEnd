import React from 'react';

type ButtonProps = {
  id: number;
  onClick: () => void;
  cIcon: any;
};

const GenericButtonMobile = ({ id, onClick, cIcon }: ButtonProps) => {
  return (
    <li key={id} className='flex items-center text-center'>
      <button
        type='button'
        className=' pointer-events-auto w-6 h-6'
        onClick={onClick}
      >
        <img draggable="false" src={cIcon} alt='' className=' w-6 h-6 select-none' />
      </button>
    </li>
  );
};

export default GenericButtonMobile;
