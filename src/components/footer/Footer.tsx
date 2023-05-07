import React from 'react';
import Links from './Linking';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className=' h-64 md:h-72 w-full absolute bg-footer bottom-0 flex flex-col'>
      <h1 className='text-white flex text-xl md:text-2xl font-roboto-text font-medium text-center mt-6 justify-center mx-auto'>
        Navigo Learn
      </h1>
      <Links />
      <Socials />
      <hr className='mt-6 w-10/12 border-gray-600 flex justify-center mx-auto' />
      <h1 className='font-roboto-text text-center text-base font-normal text-[#FFFFFF4D] mt-4'>
        @copyright. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
