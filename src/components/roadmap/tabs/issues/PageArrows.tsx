import React from 'react';
import arrowleft from '@assets/arrowleft.svg';
import arrowright from '@assets/arrowright.svg';
import doublearrowleft from '@assets/doublearrowleft.svg';
import doublearrowright from '@assets/doublearrowright.svg';

type Props = {
  decPage: () => void;
  incPage: () => void;
  toBegin: () => void;
  toEnd: () => void;
  page: number;
};
const Arrows = ({ decPage, incPage, toBegin, toEnd, page }: Props) => {
  return (
    <div className='w-full flex justify-center items-center my-3'>
      <div className='w-40 flex justify-between items-center'>
        <div className='w-20 h-4 flex justify-center gap-2'>
          <button
            type='button'
            onClick={() => {
              toBegin();
            }}
          >
            <img alt='first page' src={doublearrowright} className='w-3 h-3' />
          </button>
          <button
            type='button'
            onClick={() => {
              decPage();
            }}
          >
            <img alt='previous page' src={arrowright} className='w-4 h-4 ' />
          </button>
        </div>
        <div className='text-lg font-roboto-text'>{page}</div>
        <div className='w-20 h-4 flex justify-center gap-2'>
          <button
            type='button'
            onClick={() => {
              incPage();
            }}
          >
            <img alt='next page' src={arrowleft} className='w-4 h-4' />
          </button>
          <button
            type='button'
            onClick={() => {
              toEnd();
            }}
          >
            <img alt='go to end' src={doublearrowleft} className='w-3 h-3 ' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arrows;
