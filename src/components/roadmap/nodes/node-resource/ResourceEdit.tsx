import React from 'react';
import { renderNodeEdit } from '@components/roadmap/nodes/node-resource/utils';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import { NodeResourceProps } from '@type/roadmap/nodes';
import { addResourceSubNodeNew } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import AddNode from '@components/roadmap/nodes/edit-logic-modules/AddNode';

const ResourceEdit = ({ id: idProp, title, nodes }: NodeResourceProps) => {
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
          addResourceSubNodeNew(idProp);
        }}
      >
        Add a resource
      </button>
      <DropdownType id={idProp} type='Resource' />
      <AddNode id={idProp} />
    </div>
  );
};

export default ResourceEdit;
