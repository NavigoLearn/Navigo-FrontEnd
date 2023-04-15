import React from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import NodeEdit from '@components/roadmap/nodes/node-info/NodeEdit';
import NodeView from '@components/roadmap/nodes/node-info/NodeView';

const Node = ({ editing, title, tabId, id, level }: NodeInfoProps) => {
  return editing ? (
    <NodeEdit
      level={level}
      editing={editing}
      title={title}
      tabId={tabId}
      id={id}
    />
  ) : (
    <NodeView
      level={level}
      editing={editing}
      title={title}
      tabId={tabId}
      id={id}
    />
  );
};

export default Node;
