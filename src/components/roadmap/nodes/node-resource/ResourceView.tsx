import React from 'react';
import { ResourceProps } from '@type/roadmap/nodes';
import { renderNodeNormal } from '@components/roadmap/nodes/node-resource/utils';

const ResourceView = ({ id: idProp, title, nodes }: ResourceProps) => {
  return (
    <div
      className={` w-[250px]  pb-6 relative bg-white shadow-standard rounded-md `}
    >
      <div className='text-lg py-4 flex justify-center items-center text-placeholder  '>
        {title}
      </div>
      {nodes.map((id) => {
        return renderNodeNormal(id, idProp);
      })}
    </div>
  );
};

export default ResourceView;
