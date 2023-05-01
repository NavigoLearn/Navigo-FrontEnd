import React from 'react';
import link from '@assets/link.svg';
import { ProfileComponentProps } from '@type/profile/types';
import HOCedit from '@components/profile/common/HOCedit';

const WebsiteUrl = ({ edit, onEdit, value }: ProfileComponentProps) => {
  return (
    <div className='flex justify-center text-center items-center mt-4 w-fit'>
      {!edit ? (
        <a
          href={value === '' ? '#' : value}
          className='inline-block text-lg font-normal text-center text-primary font-roboto-text'
          aria-label='Link to external website'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={link}
            className='mx-2 inline-block w-4 h-4'
            alt='linkicon'
          />
          {value}
        </a>
      ) : (
        <div className='flex'>
          <img
            src={link}
            className='mx-2 inline-block w-4 h-4 '
            alt='linkicon'
          />
          <input
            className='inline-block min-w-[20px] border-2 border-gray-300 text-lg font-normal text-center text-primary font-roboto-text'
            value={value}
            onChange={(e) => {
              onEdit(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HOCedit(WebsiteUrl);
