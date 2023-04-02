import React, { useEffect, useRef } from 'react';
import {
  NodeProps,
  ResourceProps,
  NodeTypes,
  ManagerProps,
} from '@type/roadmap/nodes';
import { isNodeProps, isResourceProps } from '@type/roadmap/typecheckers';
import Node from './nodes/Node';
import Resource from './nodes/Resource';

const NodeManager = ({ data, sizeCb }: ManagerProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
    }
  }, []);
  const renderNode = () => {
    if (isNodeProps(data)) {
      const { title, type, tabId } = data as NodeProps;
      return <Node type={type} title={title} tabId={tabId} />;
    }
    if (isResourceProps(data)) {
      const { title, nodes } = data as ResourceProps;
      return <Resource title={title} nodes={nodes} />;
    }
    console.log(data, 'something went wrong');
    throw new Error('something went wrong');
    return null;
  };

  return (
    <div ref={rootRef} className=' inline-block border-0 '>
      {renderNode()}
    </div>
  );
};

export default NodeManager;
