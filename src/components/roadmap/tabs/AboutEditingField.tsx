import React from 'react';
import { EditingComponentProps } from '@type/roadmap/components';

const AboutEditingField = ({
  value,
  onChange,
  onSave,
  onCancel,
}: EditingComponentProps<string>) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
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
    </>
  );
};

export default AboutEditingField;
