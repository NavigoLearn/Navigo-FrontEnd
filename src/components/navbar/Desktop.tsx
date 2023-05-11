import React, { useState, useEffect } from 'react';
import logoSrc from '@assets/logo.svg';
import { useStore } from '@nanostores/react';
import ProfileDropdown from '@components/navbar/ProfileDropdown';
import loggedUser from '@store/user/logged-user';
import userStatus from '@store/user/user-status';
import DesktopButton from '@components/navbar/DesktopButton';
import { loggedLinks, guestLinks, universalLinks } from './Links';

const DesktopNavbar = () => {
  const [hydrated, setHydrated] = useState(false);
  const { profilePictureUrl } = useStore(loggedUser);
  const { loaded, isLogged } = useStore(userStatus);

  useEffect(() => {
    setHydrated(true);
    // add event listener for scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('bg-white');
          navbar.classList.add('shadow-standard');
        } else {
          navbar.classList.remove('bg-white');
          navbar.classList.remove('shadow-standard');
        }
      }
    });
  }, []);

  return (
    <nav className='bg-transparent relative flex w-full h-16 z-10 justify-between items-center transition-all  duration-300 select-none'>
      <a href='/home' className='justify-start cursor-pointer flex'>
        <img
          draggable='false'
          className='w-20 ml-8 select-none '
          src={logoSrc}
          alt='navbar-logo'
        />
      </a>
      <ul className='flex absolute w-full pointer-events-none justify-center text-center items-center gap-10 h-full '>
        {universalLinks.map((link) => {
          return (
            <DesktopButton
              key={link.id}
              hasUnder={link.hasUnder}
              id={link.id}
              title={link.title}
              path={link.path}
              cName={link.cName}
              cIcon={link.cIcon}
            />
          );
        })}
      </ul>
      <ul className='flex text-center items-center gap-4 h-full justify-items-end mx-4'>
        {hydrated &&
          loaded &&
          isLogged &&
          loggedLinks.map((link) => {
            return (
              <DesktopButton
                key={link.id}
                id={link.id}
                hasUnder={link.hasUnder}
                title={link.title}
                path={link.path}
                cName={link.cName}
                cIcon={link.cIcon}
              />
            );
          })}
        
        {hydrated && loaded && isLogged && (
          <ProfileDropdown
            profilePictureUrl={
              profilePictureUrl ||
              'https://media.istockphoto.com/id/470100848/ro/vector/pictograma-profilului-masculin-alb%C4%83-pe-fundal-albastru.jpg?s=612x612&w=0&k=20&c=-We-8zY-Oj7MMSuKwpOEkm7QUX8Gnc4Bk0KcBIO8lYY='
            } 
          />
        )}

        {hydrated &&
          loaded &&
          !isLogged &&
          guestLinks.map((link) => {
            return (
              <DesktopButton
                key={link.id}
                id={link.id}
                hasUnder={link.hasUnder}
                title={link.title}
                path={link.path}
                cName={link.cName}
                cIcon={link.cIcon}
              />
            );
          })}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
