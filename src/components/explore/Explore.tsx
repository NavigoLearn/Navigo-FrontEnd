import React, { useEffect, useState } from 'react';
import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';

const Explore = () => {
  const [isDesktop, setIsDesktop] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {typeof isDesktop === 'undefined' ? null : (
        <div>{isDesktop ? <Desktop /> : <Mobile />}</div>
      )}
    </div>
  );
};

export default Explore;
