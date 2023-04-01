import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';
import { divWrapper } from './utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const { about } = useStore(tabStore);
  return (
    <div className='h-full w-full relative'>
      <div className='w-full h-full '>
        <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
          <div className=' font-kanit-text font-semibold text-4xl  '>About</div>
        </div>
      </div>

      {divWrapper('som text')}
      {/* {divWrapper(<div>some text er</div>)}
      {fields.map((field) => {
        return divWrapper(
          <div key={field}>
            <div key={field} className=''>
              {field}
            </div>
            <div key={field} className=''>
              {about[field]}
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default About;
