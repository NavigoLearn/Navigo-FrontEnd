import React, { useState } from 'react';

const IssueButton = () => {
  const [active, setActive] = useState(true);
  const leftBorders = 'rounded-tl-full rounded-bl-full';
  const rightBorders = 'rounded-tr-full rounded-br-full';
  const classActive =
    ' bg-blue-600 w-20 text-center py-2 text-white font-medium';
  const classInactive =
    'border-2 border-blue-600 w-20 text-center py-2 font-medium text-center';
  return (
    <div className='flex relative'>
      <button
        type='button'
        className={`${active ? classActive : classInactive} ${leftBorders}`}
        onClick={() => {
          setActive(true);
        }}
      >
        ALL
      </button>
      <button
        type='button'
        className={`${active ? classInactive : classActive} ${rightBorders}`}
        onClick={() => {
          setActive(false);
        }}
      >
        Yours
      </button>
    </div>
  );
};

export default IssueButton;
