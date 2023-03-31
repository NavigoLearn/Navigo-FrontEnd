import React from 'react';

type ButtonProps = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: ButtonProps) => {
  return (
    <button
      className='bg-secondary flex justify-center items-center rounded-2xl w-32 h-10 text-white font-medium text-sm '
      type='button'
    >
      {text}
    </button>
  );
};

export default Button;
