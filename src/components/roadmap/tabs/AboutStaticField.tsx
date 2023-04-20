import React from 'react';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';

const AboutStaticField = ({ field, data }: { field: string; data: string }) => {
  return (
    <div className='flex w-full'>
      {divWrapper(
        <div className=' w-full'>
          <div className=' font-light text-secondary text-base'>{field}</div>
          <div className='md:text-lg text-main font-semibold'>{data}</div>
        </div>
      )}
    </div>
  );
};

export default AboutStaticField;
