import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';
import Issues from './tabs/Issues';
import Info from './tabs/Info';
import About from './tabs/About';

const Tab = () => {
  const { open, type } = useStore(tabStore);

  function renderTab() {
    if (type === 'issues') return <Issues />;
    if (type === 'info') return <Info />;
    if (type === 'about') return <About />;
    return <div>Nothing</div>;
  }

  return (
    <>
      {open && (
        <div className='absolute top-2 mt-0 shadow-standard right-2 w-[500px] h-[97%] bg-white'>
          <div className='h-full w-full'>{renderTab()}</div>
        </div>
      )}
      <div />
    </>
  );
};

export default Tab;
