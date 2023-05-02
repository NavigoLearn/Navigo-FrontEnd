import React from 'react';
import { NonEditingComponentBasicProps } from '@type/roadmap/components';

const AboutNonEditField = ({ data, setCb }: NonEditingComponentBasicProps) => {
  return (
    <div className='flex w-full'>
      <div className='md:text-lg text-main font-semibold'>{data}</div>
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
    </div>
  );
};

export default AboutNonEditField;
