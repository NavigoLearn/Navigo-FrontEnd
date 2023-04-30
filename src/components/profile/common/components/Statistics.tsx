import React from 'react';
import dizaign from '@assets/dizaign.svg';

const Statistics = ({ roadmapsCount }: { roadmapsCount: number }) => {
  return (
    <div className='flex w-full justify-around'>
      <div className='flex w-fit flex-col items-center'>
        <div className='flex'>
          <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
            Created Roadmaps
          </h1>
        </div>
        <div className='flex'>
          <img src={dizaign} className='flex' alt='line' />
          <h2 className='text-xl font-normal mx-4 text-center font-roboto-text'>
            {roadmapsCount}
          </h2>
          <img src={dizaign} className='flex' alt='line' />
        </div>
      </div>
      <div className='flex w-fit flex-col items-center'>
        <div className='flex'>
          <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
            Completed Roadmaps
          </h1>
        </div>
        <div className='flex'>
          <img src={dizaign} className='flex' alt='line' />
          <h2 className='text-xl font-normal mx-4 text-center font-roboto-text'>
            {roadmapsCount}
          </h2>
          <img src={dizaign} className='flex' alt='line' />
        </div>
      </div>
      <div className='flex flex-col items-center w-fit'>
        <div className='flex items-center w-fit'>
          <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
            Roadmaps in progress
          </h1>
        </div>
        <div className='flex items-center w-fit'>
          <img src={dizaign} className='flex' alt='line' />
          <h2 className='text-xl font-normal text-center mx-4 font-roboto-text'>
            {roadmapsCount}
          </h2>
          <img src={dizaign} className='flex' alt='line' />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
