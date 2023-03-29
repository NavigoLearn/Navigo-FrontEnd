import React from 'react';
import { ResourceProps } from '@type/node_types';
import Node from './Node';

const Resource = ({ title, nodes, bgColor }: ResourceProps) => {
  return (
    <div className='w-48 h-96 relative'>
      <div className='text-2xl mt-10 '>{title}</div>
      {nodes.map((el) => {
        return (
          <Node key={`${el.title}`} title={el.title} bgColor='background' />
        );
      })}
    </div>
  );
};

export default Resource;
