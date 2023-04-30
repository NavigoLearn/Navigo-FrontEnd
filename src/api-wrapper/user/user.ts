import { UserResponse } from '@type/user/types';

export const a = 1;

export const fetchUserData = async (): Promise<UserResponse> => {
  const data = await fetch('/api/users/', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const dataJson = await data.json();
  return dataJson;
};

export const handleLocalLogin = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  return response;
};

export const postSignUpData = async (email: string, password: string) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  return response;
};
