import React, { useEffect } from 'react';
import filterObject from '@store/explorefilter';
import { setData } from '@store/explorefilter';

const Cookies = () => {
  useEffect(() => {
    filterObject.subscribe((data) => {
      document.cookie = `myStoreData=${JSON.stringify(data)}`;
      console.log(data);
    });

    const cookieData = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('myStoreData='))
      ?.split('=')[1];

    console.log(JSON.parse(cookieData));
    if (cookieData) {
      setData(JSON.parse(cookieData));
    }
  }, []);
  return null;
};

export default Cookies;
