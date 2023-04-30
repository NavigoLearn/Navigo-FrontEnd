import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/runtime-roadmap/tab-manager';
import Issues from './tabs/Issues';
import Info from './tabs/Info';
import About from './tabs/About';

const TabManager = () => {
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
        <div className='absolute shadow-standard top-0  md:top-2 md:mt-0  md:right-2 w-full h-full md:w-[500px] md:h-[97%] bg-white'>
          <div className='h-full w-full'>{renderTab()}</div>
        </div>
      )}
      <div />
    </>
  );
};

export default TabManager;
