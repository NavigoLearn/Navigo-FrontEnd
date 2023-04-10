import React, { useRef } from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import NodeEdit from '@components/roadmap/nodes/node-info/NodeEdit';
import NodeView from '@components/roadmap/nodes/node-info/NodeView';

const Node = ({ title, tabId, id }: NodeInfoProps) => {
  const { editing } = useStore(roadmapState);

  return editing ? (
    <NodeEdit title={title} tabId={tabId} id={id} />
  ) : (
    <NodeView title={title} tabId={tabId} id={id} />
  );
};

export default Node;
