import React, { useRef, useState } from 'react';
import { NodeProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
import roadmap from '@store/roadmap';
import roadmapEdit, { changeInfoNode } from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';

const NodeEdit = ({ type, title, tabId, id }: NodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const roadmapData = useStore(roadmap);
  const roadmapDataEdit = useStore(roadmapEdit);
  const { editing } = useStore(roadmapState);
  const [editTitle, setEditTitle] = useState(true);
  const [nodeData, setNodeData] = useState<NodeProps>({
    id,
    title,
    type,
    tabId,
  });
  // we use usestate local variable because modifying the roadmap state directly
  // would rerender the entire tree while changing local state rerenders only
  // out current node

  const variants = {
    Node: {
      className:
        ' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white ',
      text: 'text-lg',
    },
    ResourceSubNode: {
      className:
        ' text-sm p-2 font-semibold rounded-xl shadow-standard w-48 h-8 bg-resourceSubNode border-2 border-light font-medium',
      text: 'text-sm',
    },
  };

  return (
    <div ref={rootRef} className={variants[type].className}>
      {editTitle ? (
        <>
          <input
            className={` h-full font-roboto-text  w-full flex justify-center items-center ${variants[type].text} text-center border-2 border-gray-200`}
            value={nodeData.title}
            onChange={(e) => {
              setNodeData({ ...nodeData, title: e.target.value });
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
              setNodeData({ ...nodeData, title }); // cancels the changes
            }}
          >
            Cancel title
          </button>
        </>
      ) : (
        <>
          <button
            className={` h-full font-roboto-text  w-full flex justify-center items-center ${variants[type].text} `}
            type='button'
            onClick={() => {
              // tab changing logic
              if (editTitle) return;
              if (editing) {
                setInfo(roadmapDataEdit.data[tabId]);
              } else {
                setInfo(roadmapData.data[tabId]);
              }
            }}
          >
            {title}
          </button>
          <button
            type='button'
            onClick={
              // change edit status
              () => setEditTitle(true)
            }
          >
            Edit title
          </button>
        </>
      )}
    </div>
  );
};

export default NodeEdit;
