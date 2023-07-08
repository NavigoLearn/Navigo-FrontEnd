import React from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import ResourceView from '@components/roadmap/nodes/node-resource/ResourceView';
import ResourceEdit from '@components/roadmap/nodes/node-resource/ResourceEdit';
import { NodeResourceProps } from '@type/roadmap/old/nodes';

const Resource = ({ id, title, nodes, level }: NodeResourceProps) => {
  const { editing } = useStore(roadmapState);
  return editing ? (
    <ResourceEdit level={level} id={id} title={title} nodes={nodes} />
  ) : (
    <ResourceView level={level} id={id} title={title} nodes={nodes} />
  );
};

export default Resource;
