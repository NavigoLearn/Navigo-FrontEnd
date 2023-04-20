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
const MobileSignUp = () => {
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
    <div className='mt-12 min-h-full'>
      <h1 className='text-4xl font-kanit-text text-center sm:text-5xl'>
        Ya gave in too, right?
      </h1>
      <form className='mt-12' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center'>
            <input
              required
              type='text'
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className='rounded-xl w-11/12 sm:w-10/12 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11 border-1 shadow-sm'
            />
          </div>
          <div className='flex justify-center items-center'>
            <input
              required
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className='rounded-xl w-11/12 sm:w-10/12 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11 border-1 shadow-sm mt-3'
            />
          </div>
          <div className='flex justify-center items-center'>
            <input
              required
              type='password'
              placeholder='Confirm password'
              value={reapeatPassword}
              onChange={({ target }) => setRepeatPassword(target.value)}
              className='rounded-xl w-11/12 sm:w-10/12 pl-3 placeholder:font-kanit-text placeholder:text-placeholder h-11 border-1 shadow-sm mt-3'
            />
          </div>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button
            type='submit'
            className='rounded-full w-8/12 sm:w-6/12 py-2.5 bg-buttongradient text-white font-kanit-text text-lg'
          >
            Sign up
          </button>
        </div>
        <div className='mt-6 grid grid-cols-3 items-center text-placeholder mx-8'>
          <hr className='border-gray-300' />
          <p className='text-center text-xs sm:text-base font-roboto-text'>
            OR
          </p>
          <hr className='border-gray-300' />
        </div>
        <div className='grid gap-2.5 mt-6 items-center justify-center'>
          <GoogleLoginButton onClick={handleGoogleLogin} />
          <GithubLoginButton onClick={handleGitHubLogin} />
        </div>
      </form>
    </div>
  );
};

export default MobileSignUp;