import React, { useEffect, useRef } from 'react';
import { NodeProps, ResourceProps } from '@type/node_types';

import Node from './nodes/Node';
import Resource from './nodes/Resource';

type NodeComponents = {
  Node: NodeProps;
  Resource: ResourceProps;
};

type NodeKeys = keyof NodeComponents;

type NodeManagerProps<T extends NodeKeys> = {
  nodeType: T;
  sizeCb: (width: number, height: number) => void;
} & NodeComponents[T];

const NodeManager = <T extends NodeKeys>({
  nodeType,
  sizeCb,
  ...args
}: NodeManagerProps<T>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
    }
  }, []);

  const nodeMapping = {
    Node: <Node {...args} />,
    Resource: <Resource title={title} bgColor={bgColor} nodes={nodes} />,
  };

  return (
    <div ref={rootRef} className=' inline-block'>
      {nodeMapping[nodeType]}
    </div>
  );
};

export default NodeManager;
