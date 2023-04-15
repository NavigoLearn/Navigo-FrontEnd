import React, { useRef } from 'react';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import { NodeInfoProps } from '@type/roadmap/nodes';
import InfoNonEditProps from '@components/roadmap/nodes/node-info/InfoNonEditProps';
import InfoEditProps from '@components/roadmap/nodes/node-info/InfoEditProps';
import { changeNodeGeneral } from '@typescript/roadmap/roadmap-edit-logic-decorated';

const NodeEdit = ({ title, tabId, id, level, editingNode }: NodeInfoProps) => {
  const NodeHOC = useRef(stateManager(id));
  const Node = NodeHOC.current;

  return (
    <div
      className={`  text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white `}
    >
      <Node
        value={{
          title,
        }}
        EditingComponent={InfoEditProps}
        NonEditingComponent={InfoNonEditProps}
        persistDataSave={(value) => {
          changeNodeGeneral(id, value);
        }}
      />
    </div>
  );
};

export default NodeEdit;
