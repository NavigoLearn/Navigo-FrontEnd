import React, { useState } from 'react';
import { setToolTip } from '@store/runtime-roadmap/miscParams';
import {
  getTriggerEnable,
  getTriggerDisable,
} from '@store/runtime-roadmap/rerenderTriggers';
import { NodeInfoProps } from '@type/roadmap/nodes';
import InfoNonEditProps from '@components/roadmap/nodes/node-info/InfoNonEditProps';
import InfoEditProps from '@components/roadmap/nodes/node-info/InfoEditProps';
import {
  removeNodeInfoFromPlaceholder,
  transferNodeInfoFromEditToPlaceholder,
  transferNodeInfoFromPlaceholderToEdit,
} from '@store/runtime-roadmap/roadmap-placeholder';

const NodeEdit = ({ title, tabId, id, level }: NodeInfoProps) => {
  const [editing, setEditing] = useState(false);
  return (
    <div
      className={`rounded-lg shadow-standard w-[224px] bg-white ${
        level === 'main' && !editing ? ' border-2 border-primary' : ''
      } `}
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
          data={{
            title,
            tabId,
            level,
          }}
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
