import React, { useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

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
    <div className='mt-[107px]'>
      <h1 className='text-[54px] font-kanit-text'>Welcome back!</h1>
      <div className='text-[15px] mt-3 font-light flex items-center justify-center font-roboto-text'>
        <span className='pr-1 text-secondary'>
          You don&apos;t have an account?
        </span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='text-primary'>
          Create one here.
        </a>
      </div>
      <form className='mt-[49px]' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className='text-[18px] font-kanit-text text-secondary'>
            Email
          </label>
          <input
            required
            type='text'
            placeholder='Email'
            value={email}
            data-testid='email'
            onChange={({ target }) => setEmail(target.value)}
            className='py-[12px] mt-[12px] rounded-[12px] ml-[1px] w-[363px] pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-[45px]'
          />
        </div>
        <div className='flex flex-col mt-5'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className='text-[18px] font-kanit-text text-secondary'>
            Password
          </label>
          <input
            required
            type='text'
            placeholder='Password'
            value={email}
            data-testid='email'
            onChange={({ target }) => setEmail(target.value)}
            className='py-[12px] mt-[12px] rounded-[12px] ml-[1px] w-[363px] pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-[45px]'
          />
        </div>
        <div className='flex justify-center items-center text-[18px]'>
          <button
            className='bg-primary mt-[42px] py-[10px] text-white w-[242px] rounded-full font-kanit-text'
            type='submit'
          >
            Login
          </button>
        </div>
        <div className='flex justify-center items-center mt-[14px]'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' className='text-[14px] font-roboto-text text-placeholder'>
            Forgot password?
          </a>
        </div>
        <div className='mt-[54px] grid grid-cols-3 items-center text-gray-500'>
          <hr className='border-gray-500' />
          <p className='text-center text-[12px] font-roboto-text text-placeholder'>
            OR
          </p>
          <hr className='border-gray-500' />
        </div>
        <div className='grid gap-[10px] mt-[50px] w-full justify-center items-center'>
          <GoogleLoginButton />
          <GithubLoginButton />
        </div>
      </form>
    </div>
  );
};

export default Login;
