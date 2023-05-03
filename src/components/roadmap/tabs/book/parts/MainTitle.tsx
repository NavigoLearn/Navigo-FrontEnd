import React from 'react';
import PositionWrapper from '@components/roadmap/tabs/book/parts/PositionWrapper';

const MainTitle = ({ text }: { text: string }) => {
  return (
    <div className='md:text-3xl font-semibold font-kanit-text text-main '>
      {text}
    </div>
  );
};

export default PositionWrapper(MainTitle);
