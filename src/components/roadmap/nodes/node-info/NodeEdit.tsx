import React, { useRef, useState, useEffect } from 'react';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';
import { NodeProps } from '@type/roadmap/nodes';
import Title3 from '@components/roadmap/nodes/node-info/Title3';
import Title2 from '@components/roadmap/nodes/node-info/Title2';
import useStateAndRef from '@hooks/useStateAndRef';

const variants = {
  Node: {
    className:
      ' text-sm p-2 font-semibold rounded-xl shadow-standard w-64 py-4 bg-white ',
    text: 'text-lg',
  },
  ResourceSubNode: {
    className:
      ' text-sm p-2 font-semibold rounded-xl shadow-standard w-48 h-8 bg-resourceSubNode border-2 border-light font-medium',
    text: 'text-sm',
  },
};
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
  console.log('title in nodeedit', title);
  // custom hook to keep an instance of the data and have a ref that is updated with the data
  // that we can only pass once to the stateManager and will always be updated

  const TitleHOC = useRef(
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
  const Title = TitleHOC.current;

  return (
    <div ref={rootRef} className={variants[type].className}>
      <Title
        // data={nodeData}
        EditingComponent={Title2}
        NonEditingComponent={Title3}
        field='title'
      />
      <DropdownType id={nodeData.id} title={nodeData.title} />
    </div>
  );
};

export default NodeEdit;
