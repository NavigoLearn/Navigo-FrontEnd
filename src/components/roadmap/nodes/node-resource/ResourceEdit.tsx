import React, { useState } from 'react';
import { NodeProps, ResourceProps } from '@type/roadmap/nodes';
import { renderNodeEdit } from '@components/roadmap/nodes/node-resource/utils';
import {
  generateNewResourceSubNode,
  addToResourceNewSubNode,
} from '@store/roadmap_edit';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';

const ResourceEdit = ({ id: idProp, title, nodes }: ResourceProps) => {
  return (
    <div
      className={` w-[250px]  pb-6 relative bg-white shadow-standard rounded-md `}
    >
      <div className='text-lg py-4 flex justify-center items-center text-placeholder  '>
        {title}
      </div>
      {nodes.map((id) => {
        return renderNodeEdit(id, idProp);
      })}
      <button
        type='button'
        onClick={() => {
          // add a new sub node
          addToResourceNewSubNode(idProp);
          console.log('clicked');
        }}
      >
        Add a resource
      </button>
      <DropdownType id={idProp} title={title} type='Resource' />
    </div>
  );
};

export default ResourceEdit;
