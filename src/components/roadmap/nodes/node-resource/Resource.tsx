import React from 'react';
import { ResourceProps } from '@type/roadmap/nodes';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import ResourceView from '@components/roadmap/nodes/node-resource/ResourceView';
import ResourceEdit from '@components/roadmap/nodes/node-resource/ResourceEdit';

const Resource = ({ id, title, nodes }: ResourceProps) => {
  const { editing } = useStore(roadmapState);
  return editing ? (
    <ResourceEdit id={id} title={title} nodes={nodes} />
  ) : (
    <ResourceView id={id} title={title} nodes={nodes} />
  );
};

export default Resource;
