import React, { useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  let mediaQuery;
  useEffect(() => {
    mediaQuery = window.matchMedia('(max-width: 950px)');
  }, []);

  return (
    <div className='z-100'>
      {!mediaQuery ? <DesktopNavbar /> : <MobileNavbar />}
    </div>
  );
};

export default Navbar;
