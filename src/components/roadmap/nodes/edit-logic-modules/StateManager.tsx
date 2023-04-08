import React, { useState } from 'react';
import {
  EditingComponentProps,
  NonEditingComponentProps,
} from '@type/roadmap/components';

// this is the component that manages the state of a specific part of a node
function StateAugmentedComponent(
  dataRef: any,
  originalDataRef: any,
  setData: any,
  setOriginalData: any
) {
  const StateManger = ({
    field,
    EditingComponent,
    NonEditingComponent,
    persistDataSave,
  }: {
    field: string;
    EditingComponent: React.FC<EditingComponentProps>;
    NonEditingComponent: React.FC<NonEditingComponentProps>;
    persistDataSave(id: string, prop: string, value: string): void;
  }) => {
    // does the state management for a specific part of a node
    const data = dataRef.current;
    const originalData = originalDataRef.current;
    const [editing, setEditing] = useState(true);
    // some properties need to have a dual state of edit and non edit like title
    return editing ? (
      <EditingComponent
        value={data[field]}
        onChange={(value: string) => {
          // saves value to local storage in component
          setData({ ...data, [field]: value });
        }}
        onSave={() => {
          setEditing(false);
          setOriginalData({ ...originalData, [field]: data[field] });
          persistDataSave(data.id, field, data[field]); // saves the changes to the global store
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
