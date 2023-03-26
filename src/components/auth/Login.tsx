import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='w-96 drop-shadow-sm border-2 border-gray-100 p-6 rounded'>
      <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
        <div>
          <input
            required
            type='text'
            placeholder='Email'
            value={email}
            data-testid='email'
            onChange={({ target }) => setEmail(target.value)}
            className='p-1 border-b border-gray-300 w-full focus:border-gray-500 outline-none placeholder:text-sm font-light'
          />
        </div>
        <div>
          <input
            required
            type='password'
            placeholder='Password'
            value={password}
            data-testid='password'
            onChange={({ target }) => setPassword(target.value)}
            className='p-1 mt-2 border-b border-gray-300 w-full focus:border-gray-500 outline-none placeholder:text-sm font-light'
          />
        </div>
        <div className='flex justify-between items-center text-sm'>
          <div>
            <input type='checkbox' />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='font-light ml-1'>Remember me</label>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' className='font-light'>
              Forgot Password?
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-blue-500 mt-2 w-28 h-8 rounded-lg font-semibold text-white text-sm hover:text-gray-500'
            type='submit'
          >
            Login
          </button>
        </div>
        <div className='mt-1 grid grid-cols-3 items-center text-gray-300'>
          <hr className='border-gray-300' />
          <p className='text-sm text-center'>OR</p>
          <hr className='border-gray-300' />
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-gray-800 w-40 h-12 rounded-lg font-semibold text-white text-sm hover:text-gray-500'
            type='submit'
          >
            Github authentication
          </button>
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-[#FF0000] w-40 h-12 rounded-lg font-semibold text-white text-sm hover:text-gray-500'
            type='submit'
          >
            Google authentication
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
