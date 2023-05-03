import React from 'react';
import PositionWrapper from '@components/roadmap/tabs/book/parts/PositionWrapper';

const TLDR = ({ text }: { text: string }) => {
  return (
    <div className=' font-kanit-text md:text-xl text-main font-medium'>
      TLDR: {text}
    </div>
  );
};

export default PositionWrapper(TLDR);
