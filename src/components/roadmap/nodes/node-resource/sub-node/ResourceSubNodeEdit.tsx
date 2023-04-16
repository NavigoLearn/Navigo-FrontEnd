import React, { useRef } from 'react';
import { EditingComponentNodesProps } from '@type/roadmap/components';
import ResourceTitleEdit from '@components/roadmap/nodes/node-resource/editable-fields/ResourceTitleEdit';
import { getResourceSubNodeById } from '@typescript/roadmap/roadmap-edit-logic';
import {
  changeResourceSubNodeTitle,
  getResourceSubNodeByIdPlaceholder,
  removeResourceSubNode,
} from '@store/runtime/roadmap-placeholder';
import { setZoomAllowed } from '@store/runtime/miscParams';

const ResourceSubNodeEdit = ({
  id: resId,
  parentId,
}: EditingComponentNodesProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const resource = getResourceSubNodeByIdPlaceholder(resId);

  return (
    <div
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white '
    >
      <ResourceTitleEdit
        originalValue={resource.title}
        onChange={(newTitle) => {
          // save to the placeholder
          if (typeof newTitle === 'string')
            changeResourceSubNodeTitle(resId, newTitle);
        }}
      />

      <button
        type='button'
        onClick={() => {
          // delete the subresource
          removeResourceSubNode(parentId, resId);
          setZoomAllowed(true);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ResourceSubNodeEdit;
