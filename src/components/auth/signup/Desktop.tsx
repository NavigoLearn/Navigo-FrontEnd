import React, { useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import {
  handleGoogleLogin,
  handleGitHubLogin,
} from '@components/auth/socialAuth';

// Aici trebuie rescrise testele pentru ca name field a fost sters din register
const DesktopSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reapeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== reapeatPassword) {
      alert('The passwords do not match!');
      setPassword('');
      setRepeatPassword('');
      return;
    }
    e.preventDefault();
    // console.log(name, email, password, reapeatPassword);
    setRepeatPassword('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className='mt-28'>
      <h1 className='text-6xl font-kanit-text'>Ya gave in too, right?</h1>
      <div className='text-base mt-3 font-light flex items-center justify-center font-roboto-text'>
        <span className='pr-1 text-secondary'>Already have an account?</span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='/login' className='text-primary'>
          Log in here.
        </a>
      </div>
      <form className='mt-12' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <div className='flex justify-start items-start ml-16 mb-2.5'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-lg font-kanit-text text-secondary'>
              Email
            </label>
          </div>
          <div className='flex justify-center items-center'>
            <input
              required
              type='text'
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className='rounded-xl w-96 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11'
            />
          </div>
        </div>
        <div className='flex flex-col mt-5'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className='flex justify-start items-start ml-16 mb-2.5'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-lg font-kanit-text text-secondary'>
              Password
            </label>
          </div>
          <div className='flex justify-center items-center'>
            <input
              required
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className='rounded-xl w-96 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11'
            />
          </div>
        </div>
        <div className='flex flex-col mt-5'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className='flex justify-start items-start ml-16 mb-2.5'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-lg font-kanit-text text-secondary'>
              Confirm Password
            </label>
          </div>
          <div className='flex justify-center items-center'>
            <input
              required
              type='password'
              placeholder='Password'
              value={reapeatPassword}
              onChange={({ target }) => setRepeatPassword(target.value)}
              className='rounded-xl w-96 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11'
            />
          </div>
        </div>
        <div className='flex justify-center items-center text-lg'>
          <button
            className='bg-buttongradient mt-11 py-2.5 text-white w-60 rounded-full font-kanit-text'
            type='submit'
          >
            Sign Up
          </button>
        </div>
        <div className='mt-14 grid grid-cols-3 items-center text-placeholder'>
          <hr className='border-gray-500' />
          <p className='text-center text-xs font-roboto-text'>OR</p>
          <hr className='border-gray-500' />
        </div>
        <div className='grid gap-2.5 mt-12 items-center justify-center'>
          <GoogleLoginButton onClick={handleGoogleLogin} />
          <GithubLoginButton onClick={handleGitHubLogin} />
        </div>
      </form>
    </div>
  );
};

export default DesktopSignUp;
