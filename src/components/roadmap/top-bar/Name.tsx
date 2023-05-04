import React from 'react';
import { useStore } from '@nanostores/react';
import aboutTabStore from '@store/roadmap/data/about';

const Name = () => {
  const { name } = useStore(aboutTabStore);
  return <div className='font-kanit-text text-main '>{name}</div>;
};

export default Name;
