import { UserResponse } from '@type/user/types';

export const a = 1;

export const fetchUserData = async (): Promise<UserResponse> => {
  const data = await fetch('/api/users/', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
  return data;
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

export const postBioData = async (bio: string) => {
  const response = await fetch('/api/users/bio', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      bio,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  return response;
};

export const postNameData = async (name: string) => {
  const response = await fetch('/api/users/name', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  return response;
};

export const postQuoteData = async (quote: string) => {
  const response = await fetch('/api/users/quote', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      quote,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  return response;
};

export const postWebsiteUrlData = async (websiteUrl: string) => {
  const response = await fetch('/api/users/website-url', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      websiteUrl,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
};

export const getMiniProfileData = async () => {
  try {
    const response = await fetch(`/api/users/mini`, {
      method: 'GET',
      credentials: 'include',
    }).then((res) => res);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  } catch (e) {
    return false;
  }
};
