import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/runtime/tab-manager';
import StateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import { TabAbout } from '@type/roadmap/tab-manager';
import useStateAndRef from '@hooks/useStateAndRef';
import { divWrapper } from './utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const { about: aboutOriginal } = useStore(tabStore);
  const [aboutEdit] = useStateAndRef<TabAbout>({
    name: aboutOriginal.name,
    author: aboutOriginal.author,
    description: aboutOriginal.description,
  });
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
