import React, { useRef } from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
// import roadmapData from '@store/roadmap';
// import roadmapDataEdit from '@store/roadmap_edit';

const NodeView = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const editing = false;

  return (
    <button
      type='button'
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 h-12 bg-white '
      onClick={() => {
        // tab changing logic
        // setInfo();
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
