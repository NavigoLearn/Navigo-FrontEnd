import React from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { getNodeById } from '@store/roadmap_static';
import { isNodeInfoStore } from '@type/roadmap/typecheckers';
import { setInfoFlow } from '@typescript/roadmap/tab-logic-flows';

const InfoTitleNonEdit = ({
  value,
  id,
  setCb: setEditTitle,
}: NonEditingComponentProps) => {
  return (
    <>
      <button
        className={` h-8 font-roboto-text  w-full flex justify-center items-center `}
        type='button'
        onClick={() => {
          // tab changing logic
          const node = getNodeById(id);
          if (!isNodeInfoStore(node)) return;
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

export default InfoTitleNonEdit;
