import React, { useRef } from 'react';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import ResourceSubNodeEdit from '@components/roadmap/nodes/node-resource/sub-node/ResourceSubNodeEdit';
import ResourceSubNodeView from '@components/roadmap/nodes/node-resource/sub-node/ResourceSubNodeView';
import { ResourceSubNodeProps } from '@type/roadmap/nodes';

const ResourceSubNode = ({
  type,
  title,
  tabId,
  id,
  parentId,
}: ResourceSubNodeProps) => {
  const { editing } = useStore(roadmapState);
  return editing ? (
    <ResourceSubNodeEdit
      title={title}
      type={type}
      tabId={tabId}
      id={id}
      parentId={parentId}
    />
  ) : (
    <ResourceSubNodeView title={title} type={type} tabId={tabId} id={id} />
  );
};

export default ResourceSubNode;
