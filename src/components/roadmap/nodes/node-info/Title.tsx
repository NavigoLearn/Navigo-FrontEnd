import React, { useState } from 'react';
import roadmapEdit, { changeInfoNode } from '@store/roadmap_edit';
import { NodeProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';

type TitleProps = {
  nodeData: NodeProps;
  originalData: string;
  setNodeData: (title: string) => void;
  variant: string;
};

// only concerned with the title
const Title = ({
  nodeData,
  originalData,
  setNodeData,
  variant,
}: TitleProps) => {
  const [editTitle, setEditTitle] = useState(false);

  return (
    <>
      {editTitle ? (
        <>
          <input
            className={` h-full font-roboto-text  w-full flex justify-center items-center ${variant} text-center border-2 border-gray-200`}
            value={nodeData.title}
            onChange={(e) => {
              setNodeData(e.target.value);
            }}
          />
          <button
            type='button'
            onClick={() => {
              setEditTitle(false);
              changeInfoNode(nodeData.id, 'title', nodeData.title); // saves the changes
            }}
          >
            Save title
          </button>
          <button
            type='button'
            onClick={() => {
              setEditTitle(false);
              setNodeData(originalData); // cancels the changes
            }}
          >
            Cancel title
          </button>
        </>
      ) : (
        <>
          <button
            className={` h-full font-roboto-text  w-full flex justify-center items-center ${variant} `}
            type='button'
            onClick={() => {
              // tab changing logic
              if (editTitle) return;

              setInfo(roadmapEdit.get().data[nodeData.tabId]);
            }}
          >
            {nodeData.title}
          </button>
          <div className='flex gap-3'>
            <button
              type='button'
              onClick={
                // change edit status
                () => setEditTitle(true)
              }
            >
              Edit title
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Title;
