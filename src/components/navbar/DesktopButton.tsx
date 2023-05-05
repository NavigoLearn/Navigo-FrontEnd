import React, { useRef } from 'react';

type Props = {
  id: number;
  cName: string;
  path: string;
  cIcon: string;
  title: string;
  hasUnder: boolean;
};

const DesktopButton = ({ id, cName, path, cIcon, title, hasUnder }: Props) => {
  const lineRef = useRef<HTMLDivElement | null>(null);

  return (
    <li
      key={id}
      className='flex pointer-events-auto relative'
      onMouseOver={() => {
        const div = lineRef.current;
        if (!div) {
          return;
        }
        div.style.left = '0px';
        div.style.removeProperty('right');
        div.style.width = '100%';
      }}
      onMouseOut={() => {
        const div = lineRef.current;
        if (!div) {
          return;
        }
        div.style.right = '0px';
        div.style.removeProperty('left');
        div.style.width = '0px';
      }}
    >
      {hasUnder && (
        <div
          ref={lineRef}
          className='absolute -bottom-1 w-0 h-[2px] bg-black transition-all duration-300'
        />
      )}
      <a className={cName} href={path}>
        {cIcon && <img src={cIcon} alt='icon' className='w-6 flex m-1' />}
        {title}
      </a>
    </li>
  );
};

export default DesktopButton;
