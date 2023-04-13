import React, { useRef } from 'react';
import { setInfo } from '@store/runtime/tab-manager';
import { NodeInfoProps } from '@type/roadmap/nodes';
import { fetchTabInfo } from '../../../../api/roadmap/tab-data';

const NodeView = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      type='button'
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 h-12 bg-white '
      onClick={() => {
        // tab changing logic
        fetchTabInfo(tabId).then((tabInfo) => {
          setInfo(tabInfo);
        });
      }}
    >
      <div
        className={` h-full border-black border-2 font-roboto-text  w-full flex justify-center items-center text-lg `}
      >
        {title}
      </div>
    </button>
  );
};

export default NodeView;
