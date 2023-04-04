import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

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
    <nav className='z-20'>
      <ul>{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}</ul>
    </nav>
  );
};

export default Navbar;
