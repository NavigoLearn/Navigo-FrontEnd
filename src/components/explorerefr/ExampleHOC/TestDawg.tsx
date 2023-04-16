import React from 'react';
import HoverIncrease from './HoverIncrease';
import ClickIncrease from './Clickincrease';

const TestDawg = () => {
  return (
    <div className='App'>
      {/* Render both of these components to the UI */}
      <ClickIncrease />
      <HoverIncrease />
    </div>
  );
};

export default TestDawg;
