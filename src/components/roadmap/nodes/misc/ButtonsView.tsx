import { NodeIdentifierTypes } from '@type/roadmap/nodes';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import React from 'react';
import LevelConvertor from '@components/roadmap/nodes/edit-logic-modules/LevelConvertor';
import { LevelTypes } from '@type/roadmap/level-types';
import { removeNode } from '@typescript/roadmap/roadmap-edit-logic-decorated';

const Buttons = ({
  id,
  type,
  level,
}: {
  id: string;
  type: NodeIdentifierTypes;
  level: LevelTypes;
}) => {
  return (
    <div className='pointer-events-auto relative w-full h-4 '>
      <button
        type='button'
        className=' absolute bottom-0 left-4 text-md transition-all duration-300 font-semibold font-roboto-text text-secondary hover:text-red-600 '
        onClick={() => {
          //
          removeNode(id);
        }}
      >
        Delete
      </button>
      <div className=' absolute left-[98px] bottom-0 w-16 flex justify-center'>
        <div className='relative'>
          <DropdownType id={id} type={type} />
        </div>
      </div>
      <div className=' absolute left-44  bottom-0 w-24 flex justify-center'>
        <div className='relative '>
          {type === 'Info' && <LevelConvertor id={id} level={level} />}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
