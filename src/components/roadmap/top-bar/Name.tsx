import React from 'react';
import { useStore } from '@nanostores/react';
import aboutTabStore from '@store/roadmap/data/about';

const Name = () => {
  const { name } = useStore(aboutTabStore);
  return (
    <div className='font-kanit-text text-main absolute top-4 md:top-0 md:relative '>
      {name}
    </div>
  );
};

export default Name;
