import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';

const Issues = () => {
  const tabData = useStore(tabStore);

  return <div>Issues</div>;
};

export default Issues;
