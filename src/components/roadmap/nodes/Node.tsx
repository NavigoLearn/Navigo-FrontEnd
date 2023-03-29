import React, { useRef, useEffect } from 'react';
import { NodeProps } from '@type/node_types';

const Node = ({ title, level, bgColor, resourceCb }: NodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rootRef}
      className={` w-64 h-32 bg-${bgColor} text-xl font-semibold`}
    >
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
