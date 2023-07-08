import React from 'react';
import { EditingComponentBasicProps } from '@type/roadmap/old/components';

const AboutEditingField = ({
  data,
  onChange,
  onSave,
  onCancel,
}: EditingComponentBasicProps) => {
  return (
    <div className='flex justify-between w-full'>
      <input
        value={data}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className='outline-none border-2 border-gray-300 rounded-md md:text-lg text-main font-semibold'
      />
      <div className='flex justify-end w-20'>
        <div className='flex gap-2 md:gap-4'>
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

export default AboutEditingField;
