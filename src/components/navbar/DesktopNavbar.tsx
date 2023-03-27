import React, { useState } from 'react';
import dropdown from 'src/Assets/burger-menu.png';
import dropclose from 'src/Assets/cross.png';
import { LoggedLinks, GuestLinks } from './Links';

const DesktopNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setClick((prev) => !prev);
  };

  const isLoggedIn = false;

  return (
    <nav className='bg-primary flex w-full justify-between'>
      <a href='/home' className='justify-start cursor-pointer flex'>
        <img
          className='w-fit h-20 ml-8'
          src='src/Assets/logo.png'
          alt='navbar-logo'
        />
      </a>
      <ul className='flex text-center items-center gap-10 list-none m-auto'>
        {isLoggedIn
          ? LoggedLinks.map((link) => {
              return (
                <li key={link.id}>
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
          : GuestLinks.map((link) => {
              return (
                <li key={link.id}>
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
            })}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;

/*
{Links.map((link) => {
          return (
            <li key={link.id}>
              <a className={link.cName} href={link.path}>
                <img src={link.cIcon} alt='icon' className='w-8 flex m-1' />
                {link.title}
              </a>
            </li>
          );
*/
