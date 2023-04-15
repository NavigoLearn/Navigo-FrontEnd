import React, { useRef } from 'react';
import levels from '@styles/levelStyles';
import AddNode from '@components/roadmap/nodes/edit-logic-modules/AddNode';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import { NodeInfoProps, NodeInfoStore } from '@type/roadmap/nodes';
import InfoTitleNonEdit from '@components/roadmap/nodes/node-info/InfoTitleNonEdit';
import InfoTitleEdit from '@components/roadmap/nodes/node-info/InfoTitleEdit';
import { changeNodeInfo } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import LevelConvertor from '@components/roadmap/nodes/edit-logic-modules/LevelConvertor';

const NodeEdit = ({ title, tabId, id, level }: NodeInfoProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const PropertyHOC = useRef(stateManager(id));
  const Property = PropertyHOC.current;

  return (
    <div
      ref={rootRef}
      className={`  text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white `}
    >
      <Property
        EditingComponent={InfoTitleEdit}
        NonEditingComponent={InfoTitleNonEdit}
        value={title}
        persistDataSave={(value: string) => {
          changeNodeInfo(id, 'title', value);
        }}
      />
      {/* <div className='w-20 h-20 bg-amber-400' /> */}
      <DropdownType id={id} type='Info' />
      <LevelConvertor id={id} level={level} />
      <AddNode id={id} />
    </div>
  );
};

export default NodeEdit;
