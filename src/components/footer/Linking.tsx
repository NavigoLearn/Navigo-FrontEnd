import React from 'react';

const Links = () => {
  return (
    <div className='mt-10 flex flex-row justify-center gap-6'>
      <a
        href='/feedback'
        className='font-roboto-text text-normal text-white text-2xl text-center hover:underline hover:underline-offset-4 select-none'
      >
        {' '}
        Feedback
      </a>
      <a
        href='/explore'
        className='font-roboto-text text-normal text-white text-2xl text-center hover:underline hover:underline-offset-4 select-none'
      >
        {' '}
        Explore
      </a>
      <a
        href='/home'
        className='font-roboto-text text-normal text-white text-2xl text-center hover:underline hover:underline-offset-4 select-none'
      >
        {' '}
        Home
      </a>
      <a
        href='/login'
        className='font-roboto-text text-normal text-white text-2xl text-center hover:underline hover:underline-offset-4 select-none'
      >
        {' '}
        Login
      </a>
    </div>
  );
};

export default Links;
