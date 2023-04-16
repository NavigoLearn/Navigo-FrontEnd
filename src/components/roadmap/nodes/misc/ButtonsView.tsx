import { NodeIdentifierTypes } from '@type/roadmap/nodes';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import React from 'react';

const Buttons = ({ id, type }: { id: string; type: NodeIdentifierTypes }) => {
  return (
    <div className='flex justify-between pointer-events-auto'>
      <div>add Node</div>
      <DropdownType id={id} type={type} />
      <div>Edit Node</div>
    </div>
  );
};

export default Buttons;
