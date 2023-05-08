import React from 'react';
import Links from './Linking';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className='h-32 w-full absolute bg-footer bottom-0 flex flex-col'>
      {/* <h1 className='text-white flex text-lg font-roboto-text font-medium text-center justify-center mx-auto'>
        Navigo Learn
      </h1> */}
      <Links />
      <Socials />
      <hr className=' w-10/12 border-gray-600 flex justify-center mx-auto mt-4' />
      <h1 className='font-roboto-text text-center text-base font-normal text-[#FFFFFF4D] mt-1'>
        @copyright. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
