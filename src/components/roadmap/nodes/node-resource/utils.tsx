import roadmapEdit from '@store/roadmap_edit';
import roadmap_static from '@store/roadmap_static';
import ResourceSubNode from '@components/roadmap/nodes/node-resource/sub-node/ResourceSubNode';
import React from 'react';

export function renderNodeEdit(id, parentId) {
  const data = roadmapEdit.get().resources[id];
  return (
    <div key={data.id} className='flex justify-center items-center my-2'>
      <ResourceSubNode
        id={data.id}
        parentId={parentId}
        type='ResourceSubNode'
        title={data.title}
        key={data.id}
        tabId={data.tabId}
      />
    </div>
  );
}

export function renderNodeNormal(id, parentID) {
  const data = roadmap_static.get().resources[id];
  return (
    <div key={data.id} className='flex justify-center items-center my-2'>
      <ResourceSubNode
        id={data.id}
        parentId={parentID}
        type='ResourceSubNode'
        title={data.title}
        key={data.id}
        tabId={data.tabId}
      />
    </div>
  );
}

export const a = 2;
