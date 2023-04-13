import React, { useRef } from 'react';
import AddNode from '@components/roadmap/nodes/edit-logic-modules/AddNode';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import { NodeInfoProps, NodeInfoStore } from '@type/roadmap/nodes';
import InfoTitleNonEdit from '@components/roadmap/nodes/node-info/InfoTitleNonEdit';
import InfoTitleEdit from '@components/roadmap/nodes/node-info/InfoTitleEdit';
import useStateAndRef from '@hooks/useStateAndRef';
import { changeNodeInfo } from '@typescript/roadmap/roadmap-edit-logic-decorated';

const NodeEdit = ({ title, tabId, id }: NodeInfoProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [originalData, setOriginalData, originalDataRef] =
    useStateAndRef<NodeInfoProps>({
      id,
      title,
      tabId,
    });
  // custom hook to keep an instance of the data and have a ref that is updated with the data
  // that we can only pass once to the stateManager and will always be updated

  const PropertyHOC = useRef(stateManager(originalDataRef));
  const Property = PropertyHOC.current;

  return (
    <div
      ref={rootRef}
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white h-40'
    >
      <Property
        EditingComponent={InfoTitleEdit}
        NonEditingComponent={InfoTitleNonEdit}
        field='title'
        persistDataSave={(
          idVal: string,
          prop: keyof NodeInfoStore,
          value: string
        ) => {
          changeNodeInfo(idVal, prop, value);
        }}
      />
      <DropdownType id={originalData.id} type='Info' />
      <AddNode id={originalData.id} />
    </div>
  );
};

export default NodeEdit;
