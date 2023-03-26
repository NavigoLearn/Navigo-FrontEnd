import React, { useState } from 'react';
import dropdown from 'src/Assets/burger-menu.png';
import dropclose from 'src/Assets/cross.png';

const LoggedInNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='bg-[#000000] h-16 w-full flex'>
      <a href='/home' className='ml-5 justify-start'>
        <img className='w-20' src='src/Assets/logo.png' alt='navbar-logo' />
      </a>
      <div
        className='block absolute top-0 right-0 translate-y-2 mr-5 w-12 cursor-pointer md:hidden'
        onClick={handleClick}
        onKeyDown={handleClick}
        role='presentation'
      >
        <img
          className={
            click
              ? 'w-8 object-contain translate-y-2 translate-x-2'
              : 'w-12 object-contain'
          }
          src={click ? dropclose : dropdown}
          alt='dropdown'
        />
      </div>
      <ul className='hidden md:grid md:grid-cols-3 md:justify-end md:w-full mr-20 md:text-center md:gap-10 md:items-center md:list-none'>
        <li className='flex items-center h-16 justify-self-end text-center'>
          <a
            className='text-center text-2xl text-primary hover:text-white hover:underline'
            href='/home'
          >
            Home
          </a>
        </li>
        <li className='flex items-center h-16 justify-self-end text-center'>
          <a
            className='text-center text-2xl text-primary hover:text-white hover:underline'
            href='/feedback'
          >
            Feedback
          </a>
        </li>
        <li className='flex items-center h-16 justify-self-end text-center'>
          <a
            className='text-center text-2xl text-primary hover:text-white hover:underline'
            href='/profile'
          >
            Profile
          </a>
        </li>
      </ul>
      <div className='w-screen md:hidden'>
        <ul
          className={
            click
              ? ' bg-[#242222] left-0 absolute min-h-full opacity-100 transition-all ease-linear duration-150 w-full top-16'
              : 'flex flex-col w-full absolute top-16 -left-full opacity-100 transition-all duration-150 ease-linear h-full'
          }
        >
          <li className='bg-[#242222] flex items-center h-16 justify-self-end hover:bg-[#7a0bc0]/25'>
            <a
              className='text-center text-2xl text-primary p-8 w-full table'
              href='/home'
            >
              Home
            </a>
          </li>
          <li className='bg-[#242222] flex items-center h-16 justify-self-end hover:bg-[#7a0bc0]/25'>
            <a
              className='text-center text-2xl text-primary p-8 w-full table'
              href='/feedback'
            >
              Feedback
            </a>
          </li>
          <li className='bg-[#242222] flex items-center h-16 justify-self-end hover:bg-[#7a0bc0]/25'>
            <a
              className='text-center text-2xl text-primary p-8 w-full table'
              href='/profile'
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
