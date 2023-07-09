import React, { useState } from 'react';
import AddAttachements from './renderedtabs/AddAttachements';
import Components from './renderedtabs/Components';
import Functionalities from './renderedtabs/Functionalities';
import Properties from './renderedtabs/Properties';
import Nodes from './renderedtabs/Nodes';

// 1. First, to add a new button, add a new string to the array below
const tabs = [
  'Add Attachements',
  'Components',
  'Functionalities',
  'Properties',
  'Nodes',
];

function rightWrapper(Component) {
  const WrappedComponent = () => (
    <div className='absolute md:shadow-standard top-0  md:top-2 md:mt-0  md:right-2 w-full h-full md:w-[500px] md:h-[97%] bg-white'>
      <div className='h-full w-full'>
        <Component />
      </div>
    </div>
  );

  return WrappedComponent;
}

// 2. Then, add the new component below
const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('Functionalities');

  function renderTab() {
    if (activeTab === 'Add Attachements') return <AddAttachements />;
    if (activeTab === 'Components') return <Components />;
    if (activeTab === 'Functionalities') return <Functionalities />;
    if (activeTab === 'Properties') return <Properties />;
    if (activeTab === 'Nodes') return <Nodes />;
    return <div>Nothing</div>;
  }

  return (
    <div className='h-[100%]'>
      <div className='w-full grid grid-cols-4 mt-4'>
        {tabs.map((tab: string) => {
          return (
            <button
              key={tab}
              type='button'
              className='border border-gray-600 rounded-lg'
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className='mt-5'>{renderTab()}</div>
    </div>
  );
};

export default rightWrapper(TabSwitcher);
