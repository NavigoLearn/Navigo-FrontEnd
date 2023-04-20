import React, { useEffect, useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import {
  handleGoogleLogin,
  handleGitHubLogin,
} from '@components/auth/socialAuth';

const DesktopLogin = () => {
  useEffect(() => {
    if (document.cookie.includes('token')) {
      // redirect to home page
      window.location.href = '/home';
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='mt-28'>
      <h1 className='text-6xl font-kanit-text'>Welcome back!</h1>
      <div className='text-base mt-3 font-light flex items-center justify-center font-roboto-text'>
        <span className='pr-1 text-secondary'>
          You don&apos;t have an account?
        </span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='/signup' className='text-primary'>
          Create one here.
        </a>
      </div>
      <form className='mt-12' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className='text-lg font-kanit-text text-secondary'>
            Email
          </label>
          <input
            required
            type='email'
            placeholder='Email'
            value={email}
            data-testid='email'
            onChange={({ target }) => setEmail(target.value)}
            className='py-3 mt-3 rounded-xl ml-px w-96 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-12'
          />
        </div>
        <div className='flex flex-col mt-5'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className='text-lg font-kanit-text text-secondary'>
            Password
          </label>
          <input
            required
            type='password'
            placeholder='Password'
            value={password}
            data-testid='password'
            onChange={({ target }) => setPassword(target.value)}
            className='py-3 mt-3 rounded-xl ml-px w-96 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-12'
          />
        </div>
        <div className='flex justify-center items-center text-[18px]'>
          <button
            className='bg-buttongradient mt-11 py-2.5 text-white w-60 rounded-full font-kanit-text'
            type='submit'
          >
            Login
          </button>
        </div>
        <div className='flex justify-center items-center mt-3.5'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' className='text-sm font-roboto-text text-placeholder'>
            Forgot password?
          </a>
        </div>
        <div className='mt-14 grid grid-cols-3 items-center text-gray-500'>
          <hr className='border-gray-500' />
          <p className='text-center text-xs font-roboto-text text-placeholder'>
            OR
          </p>
          <hr className='border-gray-500' />
        </div>
        <div className='grid gap-2.5 mt-12 w-full justify-center items-center'>
          <GoogleLoginButton onClick={handleGoogleLogin} />
          <GithubLoginButton onClick={handleGitHubLogin} />
        </div>
      </form>
    </div>
  );
};

export default DesktopLogin;