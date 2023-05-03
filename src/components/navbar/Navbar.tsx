import React, { useEffect, useState, useRef } from 'react';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';
import { fetchGetMiniProfileData } from '../../api-wrapper/user/user';

const Navbar = () => {
  return (
    <div className=''>
      <div className='hidden md:block'>
        <DesktopNavbar />
      </div>
      <div className='md:hidden'>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
