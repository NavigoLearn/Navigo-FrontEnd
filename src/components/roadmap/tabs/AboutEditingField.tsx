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
      />
      <div className='flex grow justify-end gap-4'>
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
    </>
  );
};

export default AboutEditingField;
