import React, { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <div className=''>
      <div className='hidden md:block'>
        <DesktopNavbar />
      </div>
      <div className=' md:hidden'>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
