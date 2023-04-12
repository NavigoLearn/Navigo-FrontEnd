import React, { useRef } from 'react';
import { setInfo } from '@store/tabinfo';
import roadmap_static from '@store/roadmap_static';
import { useStore } from '@nanostores/react';
import { NodeInfoProps } from '@type/roadmap/nodes';

const ResourceSubNodeView = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const roadmapData = useStore(roadmap_static);

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
