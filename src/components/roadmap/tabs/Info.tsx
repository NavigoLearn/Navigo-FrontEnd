import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';
import Button from '@components/Button';

const Info = () => {
  const { info } = useStore(tabStore);
  console.log(info);
  return (
    <div className=' w-full h-full'>
      <div className='w-5/6 flex justify-between mx-8 my-6 border-0 border-black'>
        <div className=' font-kanit-text font-medium text-2xl  '>
          {info.title}
        </div>
        <Button text='Mark as done' callback={() => {}} />
      </div>
    </div>
  );
};

export default Info;
