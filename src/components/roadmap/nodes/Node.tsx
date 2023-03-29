import React, { useRef, useEffect } from 'react';
import { NodeProps } from '@type/node_types';

const Node = ({ title, level, bgColor, resourceCb }: NodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rootRef}
      className={` w-48 h-16 bg-${bgColor} text-sm p-2 font-semibold`}
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
