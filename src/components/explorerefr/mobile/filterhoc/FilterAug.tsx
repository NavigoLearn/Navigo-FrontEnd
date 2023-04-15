import React, { useState } from 'react';
import dropclose from '@assets/cross.svg';
import AugmentFilter from './augmentFilter';
import Filter1 from './individualfilters/Filter1';
import Filter2 from './individualfilters/Filter2';
import Filter3 from './individualfilters/Filter3';
import Cookies from './managecookies/Cookies';

const opitonsFilter1 = [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 },
  { name: 'd', id: 4 },
];

const opitonsFilter2 = [
  { name: 'e', id: 1 },
  { name: 'f', id: 2 },
  { name: 'g', id: 3 },
  { name: 'h', id: 4 },
];

const opitonsFilter3 = [
  { name: 'i', id: 1 },
  { name: 'j', id: 2 },
  { name: 'k', id: 3 },
  { name: 'l', id: 4 },
];

const FilterAug = (props) => {
  const { onChange, value, handleClick, onSave, isOpen, setIsOpen } = props;
  return (
    <div className='h-screen w-screen bg-background absolute z-10 top-0'>
      <div className='text-[18px] flex justify-center space-x-24 items-center mt-6 sm:space-x-72 sm:text-[28px]'>
        <h1 className='inline-block'>Filter roadmaps by</h1>
        <button type='button' onClick={() => handleClick('filter')}>
          <img
            src={dropclose}
            alt='closeButton'
            className='h-7 w-7 sm:h-9 sm:w-9 inline-block'
          />
        </button>
      </div>
      <div className='mt-20 flex justify-center flex-col'>
        <div className='flex flex-col sm:mr-44'>
          {/* Aici intra toate filtrele */}
          <Filter1
            onChange={(NameField) => {
              onChange('SomeField1', NameField);
            }}
            options={opitonsFilter1}
            value={value.SomeField1}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Filter2
            onChange={(NameField) => {
              onChange('SomeField2', NameField);
            }}
            options={opitonsFilter2}
            value={value.SomeField2}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Filter3
            onChange={(NameField) => {
              onChange('SomeField3', NameField);
            }}
            options={opitonsFilter3}
            value={value.SomeField3}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div className='flex justify-center items-center mt-48'>
          <button
            type='button'
            className='bg-secondary w-28 h-8 rounded-lg text-white font-roboto-text'
            onClick={() => onSave()}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AugmentFilter(FilterAug, 'mobileFilter');
