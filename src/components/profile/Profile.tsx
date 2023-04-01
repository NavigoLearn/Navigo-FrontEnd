import React, { useState, useEffect } from 'react';
import DesktopProfile from './DesktopProfile';
import MobileProfile from './MobileProfile';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='z-100'>
      <ul>{isDesktop ? <DesktopProfile /> : <MobileProfile />}</ul>
    </nav>
  );
};

export default Navbar;
