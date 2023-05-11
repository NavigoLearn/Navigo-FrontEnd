import React, { useEffect, useState } from 'react';
import dropdown from '@assets/menu.svg';
import dropclose from '@assets/cross.svg';
import logoSrc from '@assets/logo.svg';
import { useStore } from '@nanostores/react';
import loggedUser from '@store/user/logged-user';
import userStatus from '@store/user/user-status';
import { mobileLogged, mobileGuest } from './Links';
import { handleLogout } from '@components/auth/socialAuth';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import logout from '@assets/logout.svg';

const MobileLogoutButton = () => {
  return (
    <button className='flex justify-center items-center space-x-2 mb-4' type='button' onClick={() => {handleLogout()}}>
      <img
        draggable='false'
        src={logout}
        alt='icon'
        className='w-8 h-6 flex justify-center'
      />
      <div className='flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-normal -translate-x-1'>Logout</div>
    </button>
  )
}

const MobileNavbar = () => {
  const [click, setClick] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const { profilePictureUrl } = useStore(loggedUser);
  const { loaded, isLogged } = useStore(userStatus);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setHydrated(true);
    setCurrentPath(window.location.pathname)
  }, []);

  const handleClick = () => {
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
      className={`bg-background relative  overflow-visible h-12 flex w-full justify-center select-none  ${
        click ? 'items-center ' : ' '
      }`}
    >
      <div
        className='block absolute top-0 right-0 mr-5 w-8 cursor-pointer'
        onClick={handleClick}
        onKeyDown={handleClick}
        role='presentation'
      >
        <img
          draggable='false'
          className={`relative z-[100] ${
            click ? 'h-12' : 'h-12 object-contain'
          }`}
          src={click ? dropclose : dropdown}
          alt='dropdown'
        />
      </div>
      <div className='w-full h-full'>
        <div
          className={`top-0 bg-background h-20 transition-all w-full  z-50 absolute ease-linear duration-150 ${
            click
              ? 'left-0  opacity-100'
              : 'w-full pointer-events-none -left-full opacity-0'
          }`}
        />

        <ul
          className={` bg-background  transition-all flex-col absolute items-center  top-12  z-50 ease-linear duration-150 ${
            click
              ? ' left-0  opacity-100 h-screen w-full'
              : ' w-full   -left-full opacity-0  justify-center'
          }`}
        >
          <a href='/home' className='justify-start cursor-pointer flex'>
            <img
              draggable='false'
              className='w-full h-20 object-contain items-center'
              src={logoSrc}
              alt='navbar-logo'
            />
          </a>
          {hydrated && isLogged
            ? mobileLogged.map((link) => {
                return (
                  <li
                    key={link.id}
                    className='flex items-center text-center justify-center relative'
                  >
                    {link.path !== 'logout' ? (
                      <a className={link.cName} href={link.path}>
                        {link.cIcon && (
                          <img
                            draggable='false'
                            src={link.cIcon}
                            alt='icon'
                            className='w-8 flex justify-center'
                          />
                        )}
                        {link.title}
                      </a>
                    ) : (
                      <MobileLogoutButton />
                    )}
                  </li>
                );
              })
            : mobileGuest.map((link) => {
                return (
                  <li
                    key={link.id}
                    className='items-center text-center justify-center relative'
                  >
                    {currentPath === '/roadmap/create' && link.path === '/roadmap/create' ? null : (
                      <a className={link.cName} href={link.path}>
                        <div className='flex items-center justify-center '>
                          {link.cIcon && (
                            <img
                              draggable='false'
                              src={link.cIcon}
                              alt='icon'
                              className='w-8 flex -translate-x-2'
                            />
                          )}
                          <div>{link.title}</div>
                        </div>
                      </a>
                    )}
                  </li>
                );
              })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
