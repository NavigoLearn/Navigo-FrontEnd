import React, { useState } from 'react';
import { StateManagerProps } from '@type/roadmap/components';

// this component is meant for local editing of a field with and edit toggle and an editing and nonediting component
function StateAugmentedComponent(id: string) {
  const StateManger = <T,>({
    value,
    EditingComponent,
    NonEditingComponent,
    persistDataSave,
  }: StateManagerProps<T>) => {
    // does the state management for a specific part of a node
    const [localState, setLocalState] = useState<T>(value);
    const [editing, setEditing] = useState(true);
    // some properties need to have a dual state of edit and non edit like title
    return editing ? (
      <EditingComponent
        value={localState}
        onChange={(newVal: T) => {
          // saves value to local storage in component
          setLocalState(newVal);
        }}
        onSave={() => {
          setEditing(false);
          persistDataSave(localState); // saves the changes to the global store
        }}
        onCancel={() => {
          setEditing(false);
          setLocalState(value);
        }}
      />
    ) : (
      <NonEditingComponent
        value={localState}
        id={id}
        setCb={() => {
          setEditing(true);
        }}
      />
    );
  };
  return StateManger;
}

export default StateAugmentedComponent;
