import React from 'react';
import logoSrc from '@assets/logo.svg';
import { loggedLinks, guestLinks, universalLinks } from './Links';

const DesktopNavbar = () => {
  const isLoggedIn = true;

  return (
    <nav className='bg-transparent  flex w-full h-16 z-10 justify-between'>
      <a href='/home' className='justify-start cursor-pointer flex'>
        <img className='w-20 ml-8' src={logoSrc} alt='navbar-logo' />
      </a>
      <ul className='flex flex-grow border-2 border-black justify-center text-center items-center gap-10 h-full  ml-28'>
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
      <ul className='flex text-center items-center gap-10 h-full justify-items-end mx-4'>
        {isLoggedIn
          ? loggedLinks.map((link) => {
              return (
                <li key={link.id} className='flex'>
                  <a className={link.cName} href={link.path}>
                    {link.cIcon && (
                      <img
                        src={link.cIcon}
                        alt='icon'
                        className='w-6 flex m-1'
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
