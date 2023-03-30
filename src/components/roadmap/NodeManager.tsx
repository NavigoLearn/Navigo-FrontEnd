import React, { useEffect, useRef } from 'react';
import {
  NodeProps,
  ResourceProps,
  NodeKeys,
  NodeManagerProps,
} from '@type/roadmap/node_types';

import Node from './nodes/Node';
import Resource from './nodes/Resource';

function isNodeProps(props: any): props is NodeProps {
  return (
    !!(props as NodeProps).title &&
    !!(props as NodeProps).width &&
    !!(props as NodeProps).height &&
    !!(props as NodeProps).bgColor &&
    !!(props as NodeProps).resourceCb
  );
}

function isResourceProps(props: any): props is ResourceProps {
  return (
    !!(props as ResourceProps).title &&
    !!(props as ResourceProps).bgColor &&
    !!(props as ResourceProps).nodes
  );
}

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
      const { title, width, height, bgColor, resourceCb } = args as NodeProps;
      return (
        <Node
          title={title}
          width={width}
          height={height}
          bgColor={bgColor}
          resourceCb={resourceCb}
        />
      );
    }
    if (isResourceProps(args)) {
      const { title, bgColor, nodes } = args as ResourceProps;
      return <Resource title={title} bgColor={bgColor} nodes={nodes} />;
    }
    return null;
  };

  return (
    <div ref={rootRef} className=' inline-block'>
      {renderNode()}
    </div>
  );
};

export default NodeManager;
