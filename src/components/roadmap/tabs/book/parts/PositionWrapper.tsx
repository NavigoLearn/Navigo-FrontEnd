import React from 'react';

export default (WrappedComponent) => {
  const hocComponent = ({ text }: { text: string }) => {
    return (
      <div className='flex w-full justify-center items-center'>
        <div className='w-5/6 mt-6 text-secondary font-normal font-roboto-text'>
          <WrappedComponent text={text} />
        </div>
      </div>
    );
  };

  return hocComponent;
};
