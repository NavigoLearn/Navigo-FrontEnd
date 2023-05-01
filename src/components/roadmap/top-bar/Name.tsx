import React from 'react';
import { useStore } from '@nanostores/react';
import tabManagerStore from '@store/runtime-roadmap/tab-manager';

const Name = () => {
  const { about } = useStore(tabManagerStore);
  return <div className='font-kanit-text text-main '>{about.name}</div>;
};

export default Name;
