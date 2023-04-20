import React from 'react';
import { EditingComponentBasicProps } from '@type/roadmap/components';

const AboutEditingFieldTextarea = ({
  data,
  onChange,
  onSave,
  onCancel,
}: EditingComponentBasicProps) => {
  return (
    <div className='flex justify-between w-full'>
      <textarea
        value={data}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className=' grow outline-none border-2 border-gray-300 rounded-md text-sm md:text-lg text-main font-semibold'
      />
      <div className='flex justify-end w-24 relative'>
        <div className='flex gap-2 md:gap-4 absolute right-0 top-0'>
          <button
            type='button'
            className='text-sm md:text-base'
            onClick={() => {
              onSave();
            }}
          >
            save
          </button>
          <button
            type='button'
            className='text-sm md:text-base'
            onClick={() => {
              onCancel();
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutEditingFieldTextarea;
