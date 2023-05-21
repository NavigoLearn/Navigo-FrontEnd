import React, { useRef, useState, useEffect } from 'react';
import {
  subscribeHovered,
  subscribePosition,
} from '@store/roadmap/sidebar/clickSubject';

const Ball = () => {
  const rootDivRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(false);
  const [white, setWhite] = useState(true);
  const setPosition = (posYFromTop: number) => {
    // sets the position of the ball
    const rootDiv = rootDivRef.current;
    if (rootDiv) {
      rootDiv.style.top = `${posYFromTop}px`;
    }
  };
  useEffect(() => {
    subscribePosition((posYFromTop: number) => {
      setPosition(posYFromTop);
    });
    subscribeHovered((hovered: boolean) => {
      console.log('hovered', hovered);
      if (hovered) {
        setWhite(false);
      } else {
        setWhite(true);
      }
    });
  }, []);

  return (
    <div
      ref={rootDivRef}
      className=' absolute top-[500px] left-[6px] transition-all duration-500'
    >
      <div
        className={`rounded-full transition-all duration-200 bg-white flex w-[86px] h-[86px]  justify-center items-center z-10 ${
          white ? 'opacity-0' : 'opacity-100'
        }   `}
      >
        <div
          className={`  w-14 h-14 transition-all duration-300 ${
            white ? 'bg-white' : 'bg-primary'
          }  rounded-full `}
        >
          <div />
        </div>
      </div>
    </div>
  );
};

export default Ball;
