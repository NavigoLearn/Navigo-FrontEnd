import React, { useRef } from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
import roadmap from '@store/roadmap';
import roadmapEdit from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';

const NodeView = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const roadmapData = useStore(roadmap);
  const roadmapDataEdit = useStore(roadmapEdit);
  const { editing } = useStore(roadmapState);

  return (
    <button
      type='button'
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 h-12 bg-white '
      onClick={() => {
        // tab changing logic
        if (editing) {
          setInfo(roadmapDataEdit.data[tabId]);
        } else {
          setInfo(roadmapData.data[tabId]);
        }
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
