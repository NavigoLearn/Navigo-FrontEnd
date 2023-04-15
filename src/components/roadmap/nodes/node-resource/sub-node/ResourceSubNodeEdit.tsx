import React, { useRef } from 'react';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import SubNodeTitleEdit from '@components/roadmap/nodes/node-resource/sub-node/SubNodeTitleEdit';
import SubNodeTitleNonEdit from '@components/roadmap/nodes/node-resource/sub-node/SubNodeTitleNonEdit';
import {
  removeResourceSubNode,
  changeResourceSubNode,
} from '@typescript/roadmap/roadmap-edit-logic-decorated';

import { ResourceSubNodeProps } from '@type/roadmap/resources';

const ResourceSubNodeEdit = ({
  title,
  tabId,
  id,
  parentId,
}: ResourceSubNodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const PropertyHOC = useRef(stateManager(id));
  const Property = PropertyHOC.current;

  return (
    <div
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white '
    >
      <Property
        EditingComponent={SubNodeTitleEdit}
        NonEditingComponent={SubNodeTitleNonEdit}
        persistDataSave={(value: string) => {
          changeResourceSubNode(id, 'title', value);
        }}
        value={title}
      />
      <button
        type='button'
        onClick={() => {
          // delete the subresource
          removeResourceSubNode(parentId, id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ResourceSubNodeEdit;
