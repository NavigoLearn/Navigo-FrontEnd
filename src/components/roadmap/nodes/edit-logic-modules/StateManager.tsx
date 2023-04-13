import React, { useState } from 'react';
import {
  EditingComponentProps,
  NonEditingComponentProps,
} from '@type/roadmap/components';

// this is the component that manages the state of a specific part of a node
function StateAugmentedComponent(originalDataRef: any) {
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
    const originalData = originalDataRef.current;
    const [localState, setLocalState] = useState<any>(originalData[field]);
    const [editing, setEditing] = useState(true);
    // some properties need to have a dual state of edit and non edit like title
    return editing ? (
      <EditingComponent
        value={localState}
        onChange={(value: string) => {
          // saves value to local storage in component
          setLocalState(value);
        }}
        onSave={() => {
          setEditing(false);
          persistDataSave(originalData.id, field, localState); // saves the changes to the global store
        }}
        onCancel={() => {
          setEditing(false);
          setLocalState(originalData[field]);
        }}
      />
    ) : (
      <NonEditingComponent
        value={localState}
        id={originalData.id}
        setCb={() => {
          setEditing(true);
        }}
      />
    );
  };
  return StateManger;
}

export default StateAugmentedComponent;
