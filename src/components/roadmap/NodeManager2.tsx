import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import roadmapEdit from '@store/roadmap_edit';
import roadmap from '@store/roadmap';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import { NodeInfoProps, NodeManagerProps } from '@type/roadmap/nodes';
import {
  isNodeInfoProps,
  isNodeResourceProps,
} from '@type/roadmap/typecheckers';
import Node from '@components/roadmap/nodes/node-info/Node';
import Resource from '@components/roadmap/nodes/node-resource/Resource';

const NodeManager2 = ({ data, sizeCb, renderTrigger }: NodeManagerProps) => {
  console.log('NodeManager rerendered', data);
  const rootRef = useRef<HTMLDivElement>(null);
  const { editing } = useStore(roadmapState);
  // TODO implement selective rerendering (Only rerenders when the current node changes not any node in roadmap)
  // it is currently rerendering all the nodes again on any change not directly related to that node
  // something like keeping a reference to the nodeobject characterized by id and rendering when something changes

  const [render, setRender] = useState(true);

  function triggerRender() {
    console.log('triggerRender');
    setRender(!render);
  }

  function getDependencies() {
    return [roadmap.get(), roadmapEdit.get()];
  }

  useLayoutEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
      renderTrigger(triggerRender);
    }
  }, [...getDependencies()]);

  console.log(roadmap.get());
  function getCurrentNode() {
    const { nodes } = editing ? roadmapEdit.get() : roadmap.get();
    const { id } = data as NodeInfoProps;
    return nodes[id];
  }

  const [dataRerender, setDataRerender] = useState(
    roadmapEdit.get().nodes[data.id]
  );

  const renderNode = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { nodes } = editing ? roadmapEdit.get() : roadmap.get();
    const { id } = data as NodeInfoProps;
    const node = nodes[id];
    if (isNodeInfoProps(node)) {
      const { title, type, tabId } = node;
      return <Node id={id} title={title} tabId={tabId} />;
    }
    if (isNodeResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };
  return (
    <div ref={rootRef} className=' inline-block border-0 '>
      {renderNode()}
    </div>
  );
};

export default NodeManager2;
