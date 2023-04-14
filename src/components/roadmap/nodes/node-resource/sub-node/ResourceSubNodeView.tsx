import React, { useRef } from 'react';
import { setInfo } from '@store/runtime/tab-manager';
import roadmapStatic from '@store/roadmap_static';
import { useStore } from '@nanostores/react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import { fetchTabInfo } from '../../../../../api/roadmap/tab-data';

const ResourceSubNodeView = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const roadmapData = useStore(roadmapStatic);

  return (
    <button
      type='button'
      ref={rootRef}
      className=' text-sm p-2  rounded-xl shadow-standard w-48 h-8 bg-resourceSubNode border-2 border-light font-medium'
      onClick={() => {
        // tab changing logic
        fetchTabInfo(tabId).then((tabInfo) => {
          setInfo(tabInfo);
        });
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
