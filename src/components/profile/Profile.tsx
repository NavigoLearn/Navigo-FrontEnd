import React, { useState, useEffect, useRef } from 'react';
import DesktopProfile from '@components/profile/desktop/Desktop';
import MobileProfile from '@components/profile/mobile/Mobile';

const Profile = ({ id }: { id: string }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const passId = useRef(id);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    if (id === null) {
      passId.current = '';
    }
    setLoaded(true);

    console.log('no token', !document.cookie.includes('token'), id === '', id);
    if (!document.cookie.includes('token') && (id === '' || !id)) {
      window.location.href = '/login';
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {loaded && isDesktop && <DesktopProfile id={passId.current} />}
      {loaded && !isDesktop && <MobileProfile id={passId.current} />}
    </div>
  );
};

export default Profile;
