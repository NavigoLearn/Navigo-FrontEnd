import React, { useEffect, useState } from 'react';
import SearchDesktop from './searchdesktop/SearchDesktop';
import SearchMobile from './searchmobile/SearchMovile';

const Search = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{isDesktop ? <SearchDesktop /> : <SearchMobile />}</div>;
};

export default Search;
