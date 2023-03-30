import React, { useRef, useEffect } from 'react';
import { NodeProps } from '@type/roadmap/node_types';

const Node = ({ title, width, height, bgColor, resourceCb }: NodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current.style.width = width;
    rootRef.current.style.height = height;
    rootRef.current.style.backgroundColor = bgColor;
  }, []);

  return (
    <div ref={rootRef} className={`bg-${bgColor} text-sm p-2 font-semibold`}>
      {title}
      <button
        type='button'
        onClick={() => {
          console.log('i have bee click');
        }}
      >
        click me for test
      </button>
    </div>
  );
};

export default Node;
