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
    <div className='mt-28'>
      <h1>Welcome back!</h1>
    </div>
  );
};

export default MobileSignUp;
