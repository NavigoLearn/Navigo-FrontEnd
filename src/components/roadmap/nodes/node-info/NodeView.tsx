import React, { useRef } from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import { setInfoFlow } from '@typescript/roadmap/tab-logic-flows';
import { addNewError } from '@store/runtime-roadmap/error-list';

const NodeView = ({ title, tabId, id, level }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      type='button'
      ref={rootRef}
      className={` font-semibold rounded-lg shadow-standard w-[224px] py-1  bg-white ${
        level === 'main' ? 'border-2 border-primary ' : ''
      } `}
      onClick={() => {
        // tab changing logic
        setInfoFlow(tabId);
      }}
    >
      <div
        className={` h-full  font-roboto-text  w-full flex justify-center items-center text-md`}
      >
        {title}
      </div>
    </button>
  );
};

export default NodeView;
