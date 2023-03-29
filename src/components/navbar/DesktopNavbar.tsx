import React, { useState } from 'react';
import { loggedLinks, guestLinks, universalLinks } from './Links';

const DesktopNavbar = () => {
  const isLoggedIn = false;

  return (
    <nav className='bg-background flex w-full h-12 z-10 justify-between items-center'>
      <a href='/home' className='justify-start cursor-pointer flex ml-4'>
        <img className='w-20' src='src/assets/logo.svg' alt='navbar-logo' />
      </a>
      <ul className='flex text-center items-center gap-10 h-4 justify-items-center ml-28'>
        {universalLinks.map((link) => {
          return (
            <li key={link.id} className='flex'>
              <a className={link.cName} href={link.path}>
                {link.cIcon && (
                  <img src={link.cIcon} alt='icon' className='w-6 flex m-1' />
                )}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex text-center items-center gap-10 h-8 justify-items-end mx-4'>
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
