import React from 'react';
import { NodeInfoProps } from '@type/roadmap/old/nodes';
import NodeEdit from '@components/roadmap/nodes/node-info/NodeEdit';
import NodeView from '@components/roadmap/nodes/node-info/NodeView';

const Node = ({
  editing,
  editingNode,
  title,
  tabId,
  id,
  level,
}: NodeInfoProps) => {
  return editing ? (
    <NodeEdit
      title={title}
      tabId={tabId}
      id={id}
      level={level}
      editing={editingNode}
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
