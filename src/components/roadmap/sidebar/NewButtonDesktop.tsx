import React, { useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import {
  dispatchNewHoverValue,
  dispatchNewPositionValue,
} from '@store/roadmap/sidebar/clickSubject';
import BallStatic from '@components/roadmap/sidebar/BallStatic';
import positionClickedIndex from '@store/roadmap/sidebar/clickedState';

type ButtonProps = {
  id: number;
  onClick: () => void;
  title: string;
  cIcon: any;
  index: number;
};

const NewButtonDesktop = ({
  id,
  onClick,
  title,
  cIcon,
  index,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);
  const isClicked = useStore(positionClickedIndex).clickedIndex === index;

  function getDistanceFromTop() {
    const button = buttonRef.current;
    const img = imgRef.current;
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      const buttonY = buttonRect.top;
      return buttonY;
    }
    return 0;
  }

  return (
    <li
      key={id}
      className='flex items-center justify-center text-center py-6  w-full '
    >
      <button
        ref={buttonRef}
        type='button'
        className='relative w-full flex justify-center z-30 group/wrapper text-center text-2xl hover:underline'
        onClick={() => {
          onClick();
          dispatchNewPositionValue(getDistanceFromTop());
          dispatchNewHoverValue(true);
        }}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onFocus={() => {
          // make press effect on h3
        }}
      >
        <img
          draggable='false'
          src={cIcon}
          alt='icons sidebar'
          className={`w-8 h-8  select-none  opacity-100 transition-all duration-400 ml-0  group-hover/wrapper:invert group-hover/wrapper:brightness-0 group-hover/wrapper:ml-4 z-20
              ${isClicked ? 'ml-4 brightness-0 invert ' : ''}
            `}
        />
        <div className='absolute top-[-26px] left-[5px] '>
          <BallStatic fill={hovered || isClicked} />
        </div>
        <div className='absolute w-20 h-10 pointer-events-auto left-10' />
        <div className='absolute left-24 top-0 '>
          <h3
            className={` ml-0 transition-all duration-400 group-hover/wrapper:pl-4 group-hover/wrapper:opacity-100 ${
              isClicked ? 'pl-4 opacity-100 text-main' : 'opacity-50'
            } `}
          >
            {title}
          </h3>
        </div>
      </button>
    </li>
  );
};

export default NewButtonDesktop;
