import React, { useRef } from 'react';
import { NodeProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
import roadmap from '@store/roadmap';
import { useStore } from '@nanostores/react';

const ResourceSubNodeView = ({ type, title, tabId, id }: NodeProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const roadmapData = useStore(roadmap);

  return (
    <button
      type='button'
      ref={rootRef}
      className=' text-sm p-2  rounded-xl shadow-standard w-48 h-8 bg-resourceSubNode border-2 border-light font-medium'
      onClick={() => {
        // tab changing logic
        setInfo(roadmapData.data[tabId]);
      }}
    >
      <div
        className={` h-full font-roboto-text  w-full flex justify-center items-center text-sm`}
      >
        {title}
      </div>
    </button>
  );
};

export default ResourceSubNodeView;
