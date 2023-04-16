import React from 'react';
import { renderNodeNormal } from '@components/roadmap/nodes/node-resource/utils';
import { NodeResourceProps } from '@type/roadmap/nodes';

const ResourceView = ({ id: idProp, title, nodes }: NodeResourceProps) => {
  return (
    <div
      className={` w-56  pb-6 relative bg-white shadow-standard rounded-md `}
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
