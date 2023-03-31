import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';
import Issues from './tabs/Issues';
import Info from './tabs/Info';
import About from './tabs/About';

const Tab = () => {
  const { open, type } = useStore(tabStore);

  function renderTab() {
    console.log(type);
    if (type === 'issues') return <Issues />;
    if (type === 'info') return <Info />;
    if (type === 'about') return <About />;
    return <div>Nothing</div>;
  }

  return <div className='h-full w-full bg-white'>{renderTab()}</div>;
};

export default Tab;
