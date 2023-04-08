import React, { useRef } from 'react';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import { NodeProps, ResourceSubNodeProps } from '@type/roadmap/nodes';
import SubNodeTitleEdit from '@components/roadmap/nodes/node-resource/sub-node/SubNodeTitleEdit';
import SubNodeTitleNonEdit from '@components/roadmap/nodes/node-resource/sub-node/SubNodeTitleNonEdit';
import useStateAndRef from '@hooks/useStateAndRef';
import {
  changeResourceSubNode,
  removeFromResourceSubNode,
} from '@store/roadmap_edit';

const ResourceSubNodeEdit = ({
  type,
  title,
  tabId,
  id,
  parentId,
}: ResourceSubNodeProps) => {
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
      className=' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white '
    >
      <Property
        EditingComponent={SubNodeTitleEdit}
        NonEditingComponent={SubNodeTitleNonEdit}
        field='title'
        persistDataSave={(
          idVal: string,
          prop: keyof ResourceSubNodeProps,
          value: string
        ) => {
          changeResourceSubNode(idVal, prop, value);
        }}
      />
      <button
        type='button'
        onClick={() => {
          // delete the subresource
          removeFromResourceSubNode(parentId, id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ResourceSubNodeEdit;