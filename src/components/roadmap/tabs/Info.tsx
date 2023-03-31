import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';
import Button from '@components/Button';

const Info = () => {
  const { info } = useStore(tabStore);
  console.log(info);
  return (
    <div className=' w-full h-full'>
      <div className='w-5/6 flex justify-between items-center mx-8 my-6 '>
        <div className=' font-kanit-text font-semibold text-4xl  '>
          {info.title}
        </div>
        <div className='mt-2'>
          <Button
            text='Mark as done'
            callback={() => {
              // to be done
            }}
          />
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className='w-5/6 mt-12  text-secondary font-medium font-roboto-text'>
          {info.description}
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className='w-5/6 mt-6 text-secondary font-medium font-roboto-text'>
          Visit the following resources to learn more
        </div>
      </div>

      <div className='flex w-full justify-center items-center'>
        <ul className='w-5/6 mt-6 '>
          {info.links.map((resource) => {
            return (
              <li
                key={resource}
                className='text-secondary font-medium font-roboto-text'
              >
                {resource}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Info;
