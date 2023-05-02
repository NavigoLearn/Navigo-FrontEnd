import React from 'react';
import PositionWrapper from '@components/roadmap/tabs/book/parts/PositionWrapper';

const BulletList = ({ text }: { text: string }) => {
  const items = text.split('\n'); // remove empty strings
  // removes the last 2 chars of each item
  items.forEach((item, index) => {
    items[index] = item.slice(0, -2);
  });
  // checks if the last item contains only spaces and removes it
  if (items[items.length - 1].trim() === '') {
    items.pop();
  }

  return (
    <div className='text-lg font-roboto-text text-secondary'>
      <ol className='list-decimal'>
        {items.map((item, index) => {
          return (
            <li key={item} className='text-lg font-roboto-text text-secondary'>
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PositionWrapper(BulletList);
