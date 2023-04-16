import React from 'react';
import { NonEditingComponentBasicProps } from '@type/roadmap/components';

const AboutNonEditField = ({ data, setCb }: NonEditingComponentBasicProps) => {
  return (
    <>
      <div>{data}</div>
      <div className='flex flex-grow justify-end'>
        <button
          type='button'
          onClick={() => {
            setCb();
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default AboutNonEditField;
