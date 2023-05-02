import React from 'react';
import PositionWrapper from '@components/roadmap/tabs/book/parts/PositionWrapper';

const ChapterTitle = ({ text }: { text: string }) => {
  return (
    <div className=' font-kanit-text md:text-3xl text-main font-medium'>
      {text}
    </div>
  );
};

export default PositionWrapper(ChapterTitle);
