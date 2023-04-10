import React from 'react';
import { setInfo } from '@store/tabinfo';
import roadmapEdit from '@store/roadmap_edit';
import { isResourceSubNodeProps } from '@type/roadmap/typecheckers';
import { NonEditingComponentProps } from '@type/roadmap/components';

const SubNodeTitleNonEdit = ({
  value,
  id,
  setCb: setEditTitle,
}: NonEditingComponentProps) => {
  const node = roadmapEdit.get().resources[id];
  if (!isResourceSubNodeProps(node)) {
    throw new Error('node is not a resource subnode props');
  }
  const { tabId } = node;
  return (
    <>
      <button
        className={` h-full font-roboto-text  w-full flex justify-center items-center `}
        type='button'
        onClick={() => {
          // tab changing logic
          setInfo(roadmapEdit.get().data[tabId]);
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
