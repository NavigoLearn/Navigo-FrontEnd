import React, { useState, useEffect } from 'react';
import DesktopProfile from '@components/profile/desktop/Desktop';
import MobileProfile from '@components/profile/mobile/Mobile';

const Profile = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    setLoaded(true);

    if (!document.cookie.includes('token')) {
      window.location.href = '/login';
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {loaded && isDesktop && <DesktopProfile />}
      {loaded && !isDesktop && <MobileProfile />}
    </div>
  );
};

export default Profile;
