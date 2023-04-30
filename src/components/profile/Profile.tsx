import React, { useState, useEffect } from 'react';
import DesktopProfile from './desktop/Desktop';
import MobileProfile from './mobile/Mobile';

const Profile = () => {
  const [isDesktop, setIsDesktop] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    if (!document.cookie.includes('token')) {
      window.location.href = '/login';
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {typeof isDesktop === 'undefined' ? null : (
        <div>{isDesktop ? <DesktopProfile /> : <MobileProfile />}</div>
      )}
    </div>
  );
};

export default Profile;
