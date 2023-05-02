import React, { useEffect, useState } from 'react';
import logoSrc from '@assets/logo.svg';
import HOCnav from '@components/navbar/HOCnav';
import user from '@store/user';
import { useStore } from '@nanostores/react';
import { loggedLinks, guestLinks, universalLinks } from './Links';

const DesktopNavbar = ({
  isLoggedIn,
  loaded,
}: {
  isLoggedIn: boolean;
  loaded: boolean;
}) => {
  const { profilePictureUrl } = useStore(user);

  return (
    <nav className='bg-transparent flex w-full relative h-16 z-10 justify-between items-center overflow-visible'>
      <a href='/home' className='justify-start cursor-pointer flex'>
        <img className='w-20 ml-8' src={logoSrc} alt='navbar-logo' />
      </a>
      <ul className='flex absolute w-full justify-center text-center items-center gap-10 h-full pointer-events-none '>
        {universalLinks.map((link) => {
          return (
            <li key={link.id} className='flex pointer-events-auto'>
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
        {loaded &&
          isLoggedIn &&
          loggedLinks.map((link) => {
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
        {loaded && isLoggedIn && (
          <li className='flex'>
            <a className='' href='/profile'>
              <img
                src={profilePictureUrl}
                alt='icon'
                className='w-10 h-10 rounded-full flex m-1'
              />
            </a>
          </li>
        )}
        {loaded &&
          !isLoggedIn &&
          guestLinks.map((link) => {
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

export default HOCnav(DesktopNavbar);
