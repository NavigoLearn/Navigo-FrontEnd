import { NodeIdentifierTypes } from '@type/roadmap/nodes';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import React from 'react';

const Buttons = ({ id, type }: { id: string; type: NodeIdentifierTypes }) => {
  return (
    <div className='flex justify-between pointer-events-auto relative '>
      <div className='text-xs text-placeholder font-roboto-text  absolute bottom-0 left-3'>
        add
      </div>
      <DropdownType id={id} type={type} />
      <div className='text-xs text-placeholder font-roboto-text absolute bottom-0 right-1 '>
        Edit
      </div>
    </div>
  );
};

export default Buttons;
