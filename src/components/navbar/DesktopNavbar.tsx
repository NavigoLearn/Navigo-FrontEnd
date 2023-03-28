import React, { useState } from 'react';
import { loggedLinks, guestLinks, universalLinks } from './Links';

const DesktopNavbar = () => {
  const isLoggedIn = true;

  return (
    <nav className='bg-background flex w-full z-10 justify-between'>
      <a href='/home' className='justify-start cursor-pointer flex'>
        <img
          className='w-fit h-20 ml-8'
          src='src/Assets/logo.png'
          alt='navbar-logo'
        />
      </a>
      <ul className='flex text-center items-center gap-10 justify-center'>
        {universalLinks.map((link) => {
          return (
            <li key={link.id} className='flex'>
              <a className={link.cName} href={link.path}>
                {link.cIcon && (
                  <img src={link.cIcon} alt='icon' className='w-8 flex m-1' />
                )}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex text-center items-center gap-10 mx-12 justify-end'>
        {isLoggedIn
          ? loggedLinks.map((link) => {
              return (
                <li key={link.id} className='flex'>
                  <a className={link.cName} href={link.path}>
                    {link.cIcon && (
                      <img
                        src={link.cIcon}
                        alt='icon'
                        className='w-8 flex m-1'
                      />
                    )}
                    {link.title}
                  </a>
                </li>
              );
            })
          : guestLinks.map((link) => {
              return (
                <li key={link.id} className='flex'>
                  <a className={link.cName} href={link.path}>
                    {link.title}
                  </a>
                </li>
              );
            })}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
