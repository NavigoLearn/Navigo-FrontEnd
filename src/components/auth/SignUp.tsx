import React, { useState } from 'react';
import {
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';

// Aici trebuie rescrise testele pentru ca name field a fost sters din register
const SignUp = () => {
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
    <div className='mt-[107px]'>
      <h1 className='text-[54px] font-kanit-text'>Ya gave in too, right?</h1>
      <div className='text-[15px] mt-[2px] font-light flex items-center justify-center font-roboto-text'>
        <span className='pr-1 text-secondary'>Already have an account?</span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='text-primary'>
          Log in here.
        </a>
      </div>
      <form className='mt-[57px]' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <div className='flex justify-start items-start ml-[67px] mb-[10px]'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-[18px] font-kanit-text text-secondary'>
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
              className='rounded-[12px] w-[363px] pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-[45px]'
            />
          </div>
        </div>
        <div className='flex flex-col mt-[20px]'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className='flex justify-start items-start ml-[67px] mb-[10px]'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-[18px] font-kanit-text text-secondary'>
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
              className='rounded-[12px] w-[363px] pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-[45px]'
            />
          </div>
        </div>
        <div className='flex flex-col mt-[20px]'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className='flex justify-start items-start ml-[67px] mb-[10px]'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className='text-[18px] font-kanit-text text-secondary'>
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
              className='rounded-[12px] w-[363px] pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-[45px]'
            />
          </div>
        </div>
        <div className='flex justify-center items-center text-[18px]'>
          <button
            className='bg-primary mt-[42px] py-[10px] text-white w-[242px] rounded-full font-kanit-text'
            type='submit'
          >
            Sign Up
          </button>
        </div>
        <div className='mt-[54px] grid grid-cols-3 items-center text-placeholder'>
          <hr className='border-gray-500' />
          <p className='text-center text-[12px] font-roboto-text'>OR</p>
          <hr className='border-gray-500' />
        </div>
        <div className='grid gap-[10px] mt-[50px]'>
          <GoogleLoginButton />
          <GithubLoginButton />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
