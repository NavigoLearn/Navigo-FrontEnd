import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/runtime/tab-manager';
import { divWrapper } from './utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const { about } = useStore(tabStore);
  return (
    <div className='h-full w-full relative'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <div className=' font-kanit-text font-semibold text-4xl  '>About</div>
      </div>

      <div className='mt-4'>
        {fields.map((field) => {
          return divWrapper(
            <div key={field} className=' flex gap-2 items-center'>
              <div key={field} className=' font-light text-secondary text-base'>
                {field} :
              </div>
              <div key={field} className=' font-semibold text-main text-lg '>
                {about[field]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
