import React from 'react';
import PositionWrapper from '@components/roadmap/tabs/book/parts/PositionWrapper';

const Text = ({ text }: { text: string }) => {
  return <div className='text-lg font-roboto-text text-secondary'>{text}</div>;
};

export default PositionWrapper(Text);
