import React, { useState } from 'react';
import dropdown from '@assets/menu.svg';
import dropclose from '@assets/cross.svg';
import logoSrc from '@assets/logo.svg';
import { mobileLogged, mobileGuest } from './Links';

const MobileNavbar = () => {
  const isLoggedIn = true;

  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setClick((prev) => !prev);

    // body overflow hidden
    const body = document.querySelector('body');
    if (body) {
      if (click) {
        body.style.overflow = 'auto';
      } else {
        body.style.overflow = 'hidden';
      }
    }
  };

  return (
    <nav
      className={
        click
          ? 'bg-background h-12 flex w-screen justify-center items-center'
          : 'bg-background h-12 flex w-screen justify-center'
      }
    >
      <div
        className='block absolute top-0 right-0 mr-5 w-8 cursor-pointer'
        onClick={handleClick}
        onKeyDown={handleClick}
        role='presentation'
      >
        <img
          className={click ? 'h-12' : 'h-12 object-contain'}
          src={click ? dropclose : dropdown}
          alt='dropdown'
        />
      </div>
      <div className='w-screen overflow-hidden'>
        <ul
          className={
            click
              ? 'bg-background left-0 flex-col absolute opacity-100 transition-all min-h-screen ease-linear duration-150 w-screen top-12 items-center z-10'
              : 'flex-col bg-background w-screen absolute top-12 -left-full opacity-0 transition-all duration-150 ease-linear items-center'
          }
        >
          <a href='/home' className='justify-start cursor-pointer flex'>
            <img
              className='w-full h-20 object-contain items-center'
              src={logoSrc}
              alt='navbar-logo'
            />
          </a>
          {isLoggedIn
            ? mobileLogged.map((link) => {
                return (
                  <li key={link.id} className='flex items-center text-center'>
                    <a className={link.cName} href={link.path}>
                      {link.cIcon && (
                        <img src={link.cIcon} alt='icon' className='w-8 flex' />
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
                          className='w-8 m-2 flex'
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

export default MobileNavbar;
