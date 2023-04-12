import React from 'react';
import { addNodeNew } from '@typescript/roadmap/roadmap-edit-logic-decorated';

const AddNode = ({ id }: { id: string }) => {
  return (
    <div>
      <button
        type='button'
        className='h-10 border-2 border-black mt-6'
        onClick={() => {
          // adds a new Node
          addNodeNew(id, 'Info');
        }}
      >
        Add a new Node
      </button>
    </div>
  );
};

export default AddNode;
