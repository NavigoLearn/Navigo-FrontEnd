import React, { useEffect, useRef, useState } from 'react';
import { NodeProps, ResourceProps, ManagerProps } from '@type/roadmap/nodes';
import { isNodeProps, isResourceProps } from '@type/roadmap/typecheckers';
import roadmapEdit from '@store/roadmap_edit';
import roadmap from '@store/roadmap';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import Node from './nodes/Node';
import Resource from './nodes/Resource';

const NodeManager = ({ data, sizeCb }: ManagerProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { editing } = useStore(roadmapState);
  // TODO implement selective rerendering (Only rerenders when the current node changes not any node in roadmap)
  // it is currently rerendering all the nodes again on any change not directly related to that node
  // something like keeping a reference to the nodeobject characterized by id and rendering when something changes
  useStore(roadmap);
  useStore(roadmapEdit);

  useEffect(() => {
    if (rootRef) {
      const { width, height } = rootRef.current.getBoundingClientRect();
      sizeCb(width, height);
    }
  }, []);

  // console.log('node manager rerendered');
  const renderNode = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { nodes } = roadmap.get();
    const { id } = data as NodeProps;
    const node = nodes[id];
    if (isNodeProps(node)) {
      const { title, type, tabId } = node;
      return <Node id={id} type={type} title={title} tabId={tabId} />;
    }
    if (isResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };
  const renderNodeEditing = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { nodes } = roadmapEdit.get();
    const { id } = data as NodeProps;
    const node = nodes[id];
    if (isNodeProps(node)) {
      const { title, type, tabId } = node;
      return <Node id={id} type={type} title={title} tabId={tabId} />;
    }
    if (isResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };
  return (
    <div ref={rootRef} className=' inline-block border-0 '>
      {editing ? renderNodeEditing() : renderNode()}
    </div>
  );
};

export default NodeManager;
