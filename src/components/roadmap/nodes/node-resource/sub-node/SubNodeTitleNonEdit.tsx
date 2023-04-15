import React from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { getResourceSubNodeById } from '@typescript/roadmap/roadmap-edit-logic';
import { isResourceSubNodeProps } from '@type/roadmap/typecheckers';
import { setInfoFlow } from '@typescript/roadmap/tab-logic-flows';

const SubNodeTitleNonEdit = ({
  value,
  id,
  setCb: setEditTitle,
}: NonEditingComponentProps<string>) => {
  return (
    <>
      <button
        className={` h-full font-roboto-text  w-full flex justify-center items-center `}
        type='button'
        onClick={() => {
          // tab changing logic
          const node = getResourceSubNodeById(id);
          if (!isResourceSubNodeProps(node))
            throw new Error('Node is not a resource sub node');
          const { tabId } = node;
          setInfoFlow(tabId);
        }}
      >
        {value}
      </button>
      <div className='flex gap-3 border-2 border-black'>
        <button
          type='button'
          className='border-2 border-black'
          onClick={
            // change edit status
            () => {
              setEditTitle();
            }
          }
        >
          Edit title
        </button>
      </div>
    </>
  );
};

export default SubNodeTitleNonEdit;
