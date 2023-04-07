import React, { useRef } from 'react';
import { NodeProps } from '@type/roadmap/nodes';
import { setInfo } from '@store/tabinfo';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import NodeEdit from '@components/roadmap/nodes/NodeEdit';
import NodeView from '@components/roadmap/nodes/NodeView';

const Node = ({ type, title, tabId, id }: NodeProps) => {
  const { editing } = useStore(roadmapState);

  return editing ? (
    <NodeEdit title={title} type={type} tabId={tabId} id={id} />
  ) : (
    <NodeView title={title} type={type} tabId={tabId} id={id} />
  );
};

export default Node;
