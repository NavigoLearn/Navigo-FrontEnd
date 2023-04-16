import React, { useRef, useState } from 'react';
import { setToolTip } from '@store/runtime/miscParams';
import {
  getTriggerEnable,
  getTriggerDisable,
} from '@store/runtime/rerenderTriggers';
import { NodeInfoProps } from '@type/roadmap/nodes';
import InfoNonEditProps from '@components/roadmap/nodes/node-info/InfoNonEditProps';
import InfoEditProps from '@components/roadmap/nodes/node-info/InfoEditProps';
import {
  removeNodeInfoFromPlaceholder,
  transferNodeInfoFromEditToPlaceholder,
  transferNodeInfoFromPlaceholderToEdit,
} from '@store/runtime/roadmap-placeholder';

const NodeEdit = ({ title, tabId, id, level, editingNode }: NodeInfoProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <div
      className={`  text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white `}
    >
      {editing ? (
        <InfoEditProps
          id={id}
          onSave={() => {
            // transfers the data from the placeholder to the node
            transferNodeInfoFromPlaceholderToEdit(id);
            removeNodeInfoFromPlaceholder(id);
            getTriggerEnable(id)();
            setToolTip(id, () => null);
            setEditing(false);
          }}
          onCancel={() => {
            // does not run callbacks
            getTriggerEnable(id)();
            setToolTip(id, () => null);
            setEditing(false);
          }}
        />
      ) : (
        <InfoNonEditProps
          id={id}
          setCb={() => {
            // blocking the drag and drop of the node
            transferNodeInfoFromEditToPlaceholder(id);
            getTriggerDisable(id)();
            setEditing(true);
          }}
        />
      )}
    </div>
  );
};

export default NodeEdit;
