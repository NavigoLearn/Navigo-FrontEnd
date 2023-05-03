import React, { useEffect, useRef, useState } from 'react';
import { setProfileMini, setProfilePictureUrl } from '@store/user/logged-user';
import { fetchGetMiniProfileData } from '../../api-wrapper/user/user';

export default (WrappedComponent) => {
  const hocComponent = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const isMobile = useRef<boolean>();
    useEffect(() => {
      fetchGetMiniProfileData().then((res) => {
        if (res === false) {
          setLoggedIn(false);
          return;
        }
        setProfileMini(res.profilePictureUrl, res.userId, res.name);
        setLoggedIn(true);
      });
      if (document.cookie.includes('token')) {
        setLoggedIn(true);
      }
      setLoaded(true);
    }, []);

    return <WrappedComponent isLoggedIn={loggedIn} loaded={loaded} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};
