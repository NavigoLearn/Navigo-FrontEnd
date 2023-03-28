import React, { useState } from 'react';
import dropdown from 'src/Assets/menu.svg';
import dropclose from 'src/Assets/cross.svg';
import { mobileLogged, mobileGuest } from './Links';

const DesktopNavbar = () => {
  const isLoggedIn = true;

  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setClick((prev) => !prev);
  };

  return (
    <nav
      className={
        click
          ? 'bg-background h-20 flex w-full justify-center overflow-hidden'
          : 'bg-background h-20 flex w-full justify-center'
      }
    >
      <div
        className='block absolute top-0 right-0 mr-5 w-12 cursor-pointer'
        onClick={handleClick}
        onKeyDown={handleClick}
        role='presentation'
      >
        <img
          className={click ? 'h-20 w-screen' : 'h-20 object-contain'}
          src={click ? dropclose : dropdown}
          alt='dropdown'
        />
      </div>
      <div className='w-screen'>
        <ul
          className={
            click
              ? 'bg-background left-0 flex-col absolute opacity-100 transition-all ease-linear duration-150 w-screen top-20 items-center z-10'
              : 'flex-col bg-background w-screen absolute top-20 -left-full opacity-0 transition-all duration-150 ease-linear items-center'
          }
        >
          <a href='/home' className='justify-start cursor-pointer flex'>
            <img
              className='w-full h-40 object-contain items-center'
              src='src/Assets/logo.png'
              alt='navbar-logo'
            />
          </a>
          {isLoggedIn
            ? mobileLogged.map((link) => {
                return (
                  <li key={link.id} className='flex items-center text-center'>
                    <a className={link.cName} href={link.path}>
                      {link.cIcon && (
                        <img
                          src={link.cIcon}
                          alt='icon'
                          className='w-12 flex'
                        />
                      )}
                      {link.title}
                    </a>
                  </li>
                );
              })
            : mobileGuest.map((link) => {
                return (
                  <li key={link.id} className='flex items-center text-center'>
                    <a className={link.cName} href={link.path}>
                      {link.cIcon && (
                        <img
                          src={link.cIcon}
                          alt='icon'
                          className='w-12 flex'
                        />
                      )}
                      {link.title}
                    </a>
                  </li>
                );
              })}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
