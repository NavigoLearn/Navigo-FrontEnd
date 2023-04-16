import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import ResourceSubNodeView from '@components/roadmap/nodes/node-resource/sub-node/ResourceSubNodeView';
import React from 'react';
import roadmapState from '@store/roadmap_state';

export function renderNodeNormal(id, parentID) {
  const { editing } = roadmapState.get();
  const data = editing
    ? roadmapEdit.get().resources[id]
    : roadmapStatic.get().resources[id];
  return (
    <div key={data.id} className='flex justify-center items-center my-2'>
      <ResourceSubNodeView
        level={data.level}
        title={data.title}
        tabId={data.tabId}
        id={id}
      />
    </div>
  );
}

export const a = 2;
