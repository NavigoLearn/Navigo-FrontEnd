import React, { useEffect, useState } from 'react';
import HeroRotate from './HeroRotate';

const HeroWrapper = ({ flag }: { flag: 'desktop' | 'mobile' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 970);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    setIsLoaded(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isLoaded && isDesktop && flag === 'desktop' && (
        <HeroRotate scale={0.55} animSpeed={0.5} />
      )}
      {isLoaded && !isDesktop && flag === 'mobile' && (
        <HeroRotate scale={0.3} animSpeed={0.6} />
      )}
    </div>
  );
};

export default HeroWrapper;
