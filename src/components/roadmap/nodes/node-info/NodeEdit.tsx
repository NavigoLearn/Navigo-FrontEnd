import React, { useRef } from 'react';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import { NodeProps, NodeStore } from '@type/roadmap/nodes';
import InfoTitleNonEdit from '@components/roadmap/nodes/node-info/InfoTitleNonEdit';
import InfoTitleEdit from '@components/roadmap/nodes/node-info/InfoTitleEdit';
import useStateAndRef from '@hooks/useStateAndRef';
import { changeInfoNode, addNewNode } from '@store/roadmap_edit';

const NodeEdit = ({ type, title, tabId, id }: NodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [originalData, setOriginalData, originalDataRef] =
    useStateAndRef<NodeProps>({
      id,
      title,
      type,
      tabId,
    });
  const [nodeData, setNodeData, nodeDataRef] = useStateAndRef<NodeProps>({
    id,
    title,
    type,
    tabId,
  });
  // custom hook to keep an instance of the data and have a ref that is updated with the data
  // that we can only pass once to the stateManager and will always be updated

  const PropertyHOC = useRef(
    stateManager(
      nodeDataRef,
      originalDataRef,
      (data) => {
        setNodeData(data);
      },
      (data) => {
        setOriginalData(data);
      }
    )
  );
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
          prop: keyof NodeStore,
          value: string
        ) => {
          changeInfoNode(idVal, prop, value);
        }}
      />
      <DropdownType id={nodeData.id} title={nodeData.title} type='Node' />
      <button
        type='button'
        className='h-10 border-2 border-black mt-6'
        onClick={() => {
          // adds a new Node
          console.log('add new node');
          addNewNode(nodeData.id, 'Node');
        }}
      >
        ADd a new Node
      </button>
    </div>
  );
};

export default NodeEdit;
