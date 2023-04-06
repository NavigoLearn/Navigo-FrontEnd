import React, { useRef } from 'react';
import { NodeProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
import roadmap from '@store/roadmap';
import roadmapEdit from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';

const Node = ({ type, title, tabId }: NodeProps) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const roadmapData = useStore(roadmap);
  const roadmapDataEdit = useStore(roadmapEdit);
  const { editing } = useStore(roadmapState);

  const variants = {
    Node: {
      className:
        ' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 h-12 bg-white ',
      text: 'text-lg',
    },
    ResourceSubNode: {
      className:
        ' text-sm p-2 font-semibold rounded-xl shadow-standard w-48 h-8 bg-resourceSubNode border-2 border-light font-medium',
      text: 'text-sm',
    },
  };

  return (
    <button
      type='button'
      ref={rootRef}
      className={variants[type].className}
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
        className={` h-full font-roboto-text  w-full flex justify-center items-center ${variants[type].text} `}
      >
        {title}
      </div>
    </button>
  );
};

export default Node;
