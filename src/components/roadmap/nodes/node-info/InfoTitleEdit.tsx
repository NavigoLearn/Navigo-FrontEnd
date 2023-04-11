import React from 'react';
import { EditingComponentProps } from '@type/roadmap/components';

// only concerned with the title
const InfoTitleEdit = ({
  value,
  onChange,
  onSave,
  onCancel,
}: EditingComponentProps) => {
  // title component when editing
  return (
    <>
      <input
        className={` h-8  font-roboto-text  w-full flex justify-center items-center  text-center border-2 border-gray-200 `}
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
        Save title
      </button>
      <button
        type='button'
        onClick={() => {
          onCancel();
        }}
      >
        Cancel title
      </button>
    </>
  );
};

export default InfoTitleEdit;
