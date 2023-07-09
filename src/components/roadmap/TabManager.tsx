import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/roadmap-refactor/display/tab-manager';
import TabSwitcher from '@components/roadmap/editor/TabSwitcher';

const TabManager = () => {
  const { open, type } = useStore(tabStore);
  // tab changed means index of selection is 0

  function rightWrapper(child) {
    return (
      <div className='absolute md:shadow-standard top-0  md:top-2 md:mt-0  md:right-2 w-full h-full md:w-[500px] md:h-[97%] bg-white'>
        <div className='h-full w-full'>{child}</div>
      </div>
    );
  }
  function rightExtendedWrapper(child) {
    return (
      <div className='absolute md:shadow-standard top-0 w-full h-full md:top-2 md:mt-0  md:right-2 md:w-1/2  md:left-1/2 md:h-[97%] bg-white'>
        <div className='h-full w-full'>{child}</div>
      </div>
    );
  }

  function fullScreenWrapper(child) {
    return (
      <div className='absolute top-0 w-full h-[102%] md:h-full  bg-white'>
        <div className='h-full w-full'>{child}</div>
      </div>
    );
  }

  function renderTab() {
    // if (type === 'issues') return rightWrapper(<Issues />);
    // if (type === 'info') return rightWrapper(<Info />);
    // if (type === 'about') return rightWrapper(<About />);
    // if (type === 'book') return rightExtendedWrapper(<Book />);
    // if (type === 'thread') return rightWrapper(<Thread />);
    // if (type === 'addIssue') return rightWrapper(<AddIssue />);
    return <div>Nothing</div>;
  }
  console.log('rendering tab manager');

  return (
    <>
      {/* {open && renderTab()} */}
      <TabSwitcher />

      <div />
    </>
  );
};

export default TabManager;
