import React from 'react';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';

const Navbar = () => {
  return (
    <>
      <div className='hidden md:block sticky top-0 z-[100]'>
        <DesktopNavbar />
      </div>
      <div className='md:hidden'>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
