import React, { useEffect, useRef } from 'react';
import { NodeManagerProps } from '@type/node_types';
import Node from './nodes/Node';
import Resource from './nodes/Resource';

const NodeManager = ({ nodeType, sizeCb, ...args }: NodeManagerProps) => {
  const { title, bgColor } = args;
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
    }
  }, []);

  const nodeMapping = {
    Node: <Node title={title} bgColor={bgColor} />,
    Resource: <Resource title={title} bgColor={bgColor} />,
  };

  return (
    <div ref={rootRef} className=' inline-block'>
      {nodeMapping[nodeType]}
    </div>
  );
};

export default NodeManager;
