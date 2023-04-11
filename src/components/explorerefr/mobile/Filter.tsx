import React, { useLayoutEffect, useState } from 'react';
import dropclose from '@assets/cross.svg';
import chevronup from '@assets/chevron-up.svg';
import chevrondown from '@assets/chevron-down.svg';
import buttons from '@components/roadmap/sidebar/buttons';

const default1 = 'a';
const default2 = 'b';
const default3 = 'c';

const Filter = ({ handleClick, options1, options2, options3 }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isSelected1, setIsSelected1] = useState(default1);
  const [isSelected2, setIsSelected2] = useState(default2);
  const [isSelected3, setIsSelected3] = useState(default3);

  return (
    <div className='h-screen w-screen bg-background absolute z-10 top-0'>
      <div className='text-[18px] flex justify-center space-x-44 items-center mt-6 sm:space-x-72 sm:text-[28px]'>
        <h1 className='inline-block'>Filter roadmaps by</h1>
        <button type='button' onClick={() => handleClick('filter')}>
          <img
            src={dropclose}
            alt='closeButton'
            className='h-7 w-7 sm:h-9 sm:w-9 inline-block'
          />
        </button>
      </div>
      <div className='mt-20 mr-6 sm:mr-44'>
        {/* First filter */}
        <div className='flex justify-center mt-8 space-x-7 items-center'>
          <span className='text-[18px] font-kanit-text sm:text-[23px]'>
            SomeField1
          </span>
          <div className='relative'>
            <button
              onClick={() => {
                setIsOpen1((prev) => !prev);
                setIsOpen2(false);
                setIsOpen3(false);
              }}
              type='button'
              className='bg-white rounded-lg shadow-standard w-40 text-[15x] h-7 sm:w-44 sm:h-8'
            >
              <div className='relative rounded-md'>
                <span className='font-roboto sm:text-[18px]'>
                  {isSelected1}
                </span>
                {isOpen1 ? (
                  <img
                    src={chevronup}
                    alt='openList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                ) : (
                  <img
                    src={chevrondown}
                    alt='closeList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                )}
              </div>
            </button>
            {isOpen1 && (
              <ul className='flex justify-center items-center flex-col mt-1 absolute bg-white rounded-md font-roboto z-10'>
                {options1.map((option: string) => (
                  <button
                    type='button'
                    key={option}
                    onClick={() => {
                      setIsSelected1(option);
                      setIsOpen1(false);
                    }}
                    className='w-40 h-6 sm:w-44 sm:h-7 text-[14px]'
                  >
                    {option}
                  </button>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Second filter */}
        <div className='flex justify-center mt-8 space-x-7 items-center'>
          <span className='text-[18px] font-kanit-text sm:text-[23px]'>
            SomeField2
          </span>
          <div className='relative'>
            <button
              onClick={() => {
                setIsOpen1(false);
                setIsOpen2((prev) => !prev);
                setIsOpen3(false);
              }}
              type='button'
              className='bg-white rounded-lg shadow-standard w-40 text-[15x] h-7 sm:w-44 sm:h-8'
            >
              <div className='relative'>
                <span className='font-roboto sm:text-[18px]'>
                  {isSelected2}
                </span>
                {isOpen2 ? (
                  <img
                    src={chevronup}
                    alt='openList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                ) : (
                  <img
                    src={chevrondown}
                    alt='closeList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                )}
              </div>
            </button>
            {isOpen2 && (
              <ul className='flex justify-center items-center flex-col mt-1 absolute bg-white rounded-md font-roboto z-10'>
                {options2.map((option: string) => (
                  <button
                    type='button'
                    key={option}
                    onClick={() => {
                      setIsSelected2(option);
                      setIsOpen2(false);
                    }}
                    className='w-40 h-6 sm:w-44 sm:h-7 text-[14px]'
                  >
                    {option}
                  </button>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Third filter */}
        <div className='flex justify-center mt-8 space-x-7 items-center'>
          <span className='text-[18px] font-kanit-text sm:text-[23px]'>
            SomeField3
          </span>
          <div className='relative'>
            <button
              onClick={() => {
                setIsOpen1(false);
                setIsOpen2(false);
                setIsOpen3((prev) => !prev);
              }}
              type='button'
              className='bg-white rounded-lg shadow-standard w-40 text-[15x] h-7 sm:w-44 sm:h-8'
            >
              <div className='relative'>
                <span className='font-roboto sm:text-[18px]'>
                  {isSelected3}
                </span>
                {isOpen3 ? (
                  <img
                    src={chevronup}
                    alt='openList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                ) : (
                  <img
                    src={chevrondown}
                    alt='closeList'
                    className='h-6 w-6 sm:h-7 sm:w-7 sm:top-0 -top-[2px] absolute right-1'
                  />
                )}
              </div>
            </button>
            {isOpen3 && (
              <ul className='flex justify-center items-center flex-col mt-1 absolute bg-white rounded-md font-roboto z-10'>
                {options3.map((option: string) => (
                  <button
                    type='button'
                    key={option}
                    onClick={() => {
                      setIsSelected3(option);
                      setIsOpen3(false);
                    }}
                    className='w-40 h-6 sm:w-44 sm:h-7 text-[14px]'
                  >
                    {option}
                  </button>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-[310px]'>
        <button
          type='button'
          className='bg-secondary w-28 h-8 rounded-lg text-white font-roboto-text'
          onClick={() => {
            setIsSelected1(default1);
            setIsSelected2(default2);
            setIsSelected3(default3);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
