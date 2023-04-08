import React from 'react';
import { setInfo } from '@store/tabinfo';
import roadmapEdit from '@store/roadmap_edit';

const Title3 = ({
  value,
  id,
  setCb: setEditTitle,
}: {
  value: string;
  id: string;
  setCb: () => void;
}) => {
  console.log('title3 rerendered', value, id, setEditTitle);
  return (
    <>
      <button
        className={` h-full font-roboto-text  w-full flex justify-center items-center `}
        type='button'
        onClick={() => {
          // tab changing logic
          setInfo(roadmapEdit.get().data[id]);
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
              console.log('edit title');
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

export default Title3;
