import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import { NodeInfoProps, NodeManagerProps } from '@type/roadmap/nodes';
import {
  isNodeInfoProps,
  isNodeResourceProps,
} from '@type/roadmap/typecheckers';
import Node from './nodes/node-info/Node';
import Resource from './nodes/node-resource/Resource';

const NodeManager = ({ data, sizeCb, renderTrigger }: NodeManagerProps) => {
  // console.log('NodeManager rerendered', data);
  const rootRef = useRef<HTMLDivElement>(null);
  const { editing } = useStore(roadmapState);

  const [render, setRender] = useState(true);

  function triggerRender() {
    console.log('triggerRender', data.id);
    setRender(!render);
    // used for selective rerendering of the nodes
  }

  useLayoutEffect(() => {
    renderTrigger(triggerRender);
  }, []);

  const renderNode = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { id } = data as NodeInfoProps;
    const node = data;
    if (isNodeInfoProps(node)) {
      const { title, tabId } = node;
      return <Node id={id} title={title} tabId={tabId} />;
    }
    if (isNodeResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };

  const renderedNode = useRef(renderNode());

  useLayoutEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
    }
  }, [render]);

  return (
    <div ref={rootRef} className=' inline-block border-0 '>
      {/* hello there simple node */}
      {/* {renderNode()} */}
      {renderedNode.current}
    </div>
  );
};

export default NodeManager;
