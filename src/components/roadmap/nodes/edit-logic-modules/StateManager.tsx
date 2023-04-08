import React, { useState, useEffect } from 'react';
import { changeInfoNode } from '@store/roadmap_edit';

// this is the component that manages the state of a specific part of a node
function StateAugmentedComponent(
  dataRef: any,
  originalDataRef: any,
  setData: any,
  setOriginalData: any
) {
  const StateManger = ({
    // data,
    // originalData,
    field,
    EditingComponent,
    NonEditingComponent,
  }: {
    // data: any;
    // originalData: any;
    field: string;
    EditingComponent: React.FC<any>;
    NonEditingComponent: React.FC<any>;
  }) => {
    // does the state management for a specific part of a node
    const data = dataRef.current;
    const originalData = originalDataRef.current;
    console.log(data, originalData, 'pair data and orignal');

    const [editing, setEditing] = useState(true);
    return editing ? (
      <EditingComponent
        value={data[field]}
        editing={editing}
        onChange={(value: string) => {
          // saves value to local storage in component
          setData({ ...data, title: value });
        }}
        onSave={() => {
          setEditing(false);
          setOriginalData({ ...originalData, [field]: data[field] });
          changeInfoNode(data.id, 'title', data.title); // saves the changes
          // saves the value to the global store
        }}
        onCancel={() => {
          setEditing(false);
          setData({ ...data, [field]: originalData[field] }); // cancels the changes
        }}
      />
    ) : (
      <NonEditingComponent
        value={data[field]}
        id={data.id}
        setCb={() => {
          setEditing(true);
        }}
      />
    );
  };
  return StateManger;
}

export default StateAugmentedComponent;
