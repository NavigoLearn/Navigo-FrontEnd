import React from 'react';

type ButtonProps = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: ButtonProps) => {
  return (
    <button
      className='bg-secondary flex justify-center items-center rounded-xl w-24 h-8 text-white font-medium text-xs'
      type='button'
    >
      {text}
    </button>
  );
};

export default Button;
