import React, { useEffect, useRef } from 'react';
import {
  NodeProps,
  ResourceProps,
  NodeKeys,
  NodeManagerProps,
} from '@type/roadmap/nodes';

import { isNodeProps, isResourceProps } from '@type/roadmap/typecheckers';
import Node from './nodes/Node';
import Resource from './nodes/Resource';

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
  const renderNode = () => {
    if (isNodeProps(args)) {
      const { title, type, tabId } = args as NodeProps;
      return <Node type={type} title={title} tabId={tabId} />;
    }
    if (isResourceProps(args)) {
      const { title, nodes } = args as ResourceProps;
      return <Resource title={title} nodes={nodes} />;
    }
    return null;
  };

  return (
    <div ref={rootRef} className=' inline-block border-0 '>
      {renderNode()}
    </div>
  );
};

export default NodeManager;
