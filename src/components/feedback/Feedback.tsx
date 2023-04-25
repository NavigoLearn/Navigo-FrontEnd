import React, { useState, useEffect } from 'react';
import DesktopFeedback from '@components/feedback/Desktop';
import MobileFeedback from '@components/feedback/Mobile';

const Feedback = () => {
  const [isDesktop, setIsDesktop] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {typeof isDesktop === 'undefined' ? null : (
        <div>{isDesktop ? <DesktopFeedback /> : <MobileFeedback />}</div>
      )}
    </div>
  );
};

export default Feedback;
