import React, { useEffect, useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import {
  handleGoogleLogin,
  handleGitHubLogin,
} from '@components/auth/socialAuth';

const MobileLogin = () => {
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
    <div className='mt-12 w-screen justify-center items-center'>
      <h1 className='text-4xl sm:text-6xl justify-center text-center font-kanit-text'>
        Welcome back!
      </h1>
      <form
        className='mt-12 items-center justify-center mx-auto flex flex-col w-10/12 max-w-xs sm:max-w-lg'
        onSubmit={handleSubmit}
      >
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          data-testid='email'
          onChange={({ target }) => setEmail(target.value)}
          className='flex py-3 mt-3 justify-center rounded-2xl border-2 shadow-sm w-full pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-14 sm:h-16'
        />
        <input
          required
          type='password'
          placeholder='Password'
          value={password}
          data-testid='password'
          onChange={({ target }) => setPassword(target.value)}
          className='flex py-3 mt-3 justify-center rounded-2xl border-2 shadow-sm w-full pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-14 sm:h-16 sm:mt-6'
        />
        <button
          type='submit'
          className='flex justify-center items-center mt-6 w-56 h-12 sm:w-72 sm:h-16 sm:text-2xl rounded-full bg-buttongradient text-white font-kanit-text text-lg'
        >
          Login
        </button>
        <div className='mt-6 grid grid-cols-3 items-center text-gray-500 w-56 sm:w-72'>
          <hr className='border-gray-500' />
          <p className='text-center text-xs font-roboto-text text-placeholder sm:text-lg'>
            OR
          </p>
          <hr className='border-gray-500' />
        </div>
        <div className='grid gap-2.5 mt-6 w-full justify-center items-center'>
          <GoogleLoginButton onClick={handleGoogleLogin} />
          <GithubLoginButton onClick={handleGitHubLogin} />
        </div>
      </form>
    </div>
  );
};

export default MobileLogin;
