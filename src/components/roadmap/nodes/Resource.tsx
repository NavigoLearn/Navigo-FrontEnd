import React from 'react';
import { ResourceProps } from '@type/roadmap/nodes';
import roadmap from '@store/roadmap';
import { useStore } from '@nanostores/react';
import Node from './Node';

const Resource = ({ title, nodes }: ResourceProps) => {
  const roadmapData = useStore(roadmap);
  function renderNode(id) {
    const data = roadmapData.resourceSubNodes[id];
    return (
      <div key={data.id} className='flex justify-center items-center my-2'>
        <Node
          type='ResourceSubNode'
          title={data.title}
          key={data.title}
          tabId={data.tabId}
        />
      </div>
    );
  }
  return (
    <div
      className={` w-[250px]  pb-6 relative bg-white shadow-standard rounded-md `}
    >
      <div className='text-lg py-4 flex justify-center items-center text-placeholder  '>
        {title}
      </div>
      {nodes.map((id) => {
        return renderNode(id);
      })}
    </div>
  );
};

export default Resource;
