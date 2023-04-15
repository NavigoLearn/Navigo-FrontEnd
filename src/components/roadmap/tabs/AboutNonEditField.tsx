import React from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';

const AboutNonEditField = ({
  value,
  setCb,
  id,
}: NonEditingComponentProps<string>) => {
  return (
    <>
      <div>{value}</div>
      <button
        type='button'
        onClick={() => {
          setCb();
        }}
      >
        Edit
      </button>
    </>
  );
};

export default AboutNonEditField;
