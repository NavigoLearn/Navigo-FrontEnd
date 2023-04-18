import React from 'react';
import {
  EditingComponentBasicProps,
  EditingComponentNodesProps,
} from '@type/roadmap/components';

const AboutEditingField = ({
  data,
  onChange,
  onSave,
  onCancel,
}: EditingComponentBasicProps) => {
  return (
    <>
      <input
        value={data}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className=' w-20'
      />
      <div className='flex justify-end w-20'>
        <div className='flex gap-4'>
          <button
            type='button'
            onClick={() => {
              onSave();
            }}
          >
            save
          </button>
          <button
            type='button'
            onClick={() => {
              onCancel();
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutEditingField;
