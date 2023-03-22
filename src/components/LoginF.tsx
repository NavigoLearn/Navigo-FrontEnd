import React, { useState } from 'react';

const LoginF = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            type='text'
            placeholder='Email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <input
            required
            type='password'
            placeholder='password'
            value={email}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <div>
            <input type='checkbox' />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Remember me</label>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#'>Forgot Password?</a>
          </div>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginF;
