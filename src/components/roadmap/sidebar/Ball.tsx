import React, { useRef, useState, useEffect } from 'react';

const Ball = () => {
  const rootDivRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(false);
  const setPosition = (posYFromTop: number) => {
    // sets the position of the ball
    const rootDiv = rootDivRef.current;
    if (rootDiv) {
      console.log('ran');
      rootDiv.style.top = `${posYFromTop}px`;
    }
  };
  useEffect(() => {
    setPosition(100);
  }, []);

  return (
    <div
      ref={rootDivRef}
      className='absolute top-[500px] left-1 transition-all duration-500 w-[86px] h-[86px] rounded-full bg-white flex justify-center items-center '
    >
      <div className=' w-14 h-14 bg-primary rounded-full'>
        <div />
      </div>
    </div>
  );
};

export default Ball;
