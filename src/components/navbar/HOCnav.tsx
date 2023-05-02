import React, { useEffect, useRef, useState } from 'react';
import { setUserProfilePicture } from '@store/user';
import { getMiniProfileData } from '../../api-wrapper/user/user';

export default (WrappedComponent) => {
  const hocComponent = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const isMobile = useRef<boolean>();
    useEffect(() => {
      getMiniProfileData().then((res) => {
        if (res === false) {
          setLoggedIn(false);
          return;
        }
        setUserProfilePicture(res.profilePictureUrl);
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
