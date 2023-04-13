import React from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { getNodeById } from '@typescript/roadmap/roadmap-edit-logic';
import { isResourceSubNodeProps } from '@type/roadmap/typecheckers';
import { setInfo } from '@store/runtime/tab-manager';
import { fetchTabInfo } from '../../../../../api/roadmap/tab-data';

const SubNodeTitleNonEdit = ({
  value,
  id,
  setCb: setEditTitle,
}: NonEditingComponentProps) => {
  return (
    <>
      <button
        className={` h-full font-roboto-text  w-full flex justify-center items-center `}
        type='button'
        onClick={() => {
          // tab changing logic
          const node = getNodeById(id);
          if (!isResourceSubNodeProps(node))
            throw new Error('Node is not a resource sub node');
          const { tabId } = node;
          fetchTabInfo(tabId).then((tabInfo) => {
            setInfo(tabInfo);
          });
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
