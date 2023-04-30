import React from 'react';
import { ProfileComponentProps } from '@type/profile/types';
import HOCedit from '@components/profile/common/HOCedit';

const Bio = ({ onEdit, value, edit }: ProfileComponentProps) => {
  return (
    <div className='flex flex-col justify-start text-start text-[20px] text-main font-normal font-roboto-text mt-4 mx-16'>
      BIO
      {!edit ? (
        <div className='text-md flex font-normal text-start text-[16px] mt-4 text-secondary font-roboto-text'>
          {value}
        </div>
      ) : (
        <textarea
          className='text-md flex font-normal text-start border-2 border-gray-300 min-w-[250px] text-[16px] mt-4 text-secondary font-roboto-text'
          value={value}
          onChange={(e) => {
            onEdit(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default HOCedit(Bio);
