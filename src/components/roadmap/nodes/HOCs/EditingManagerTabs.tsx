import React, { useState, useRef } from 'react';
import {
  EditingComponentBasicProps,
  NonEditingComponentBasicProps,
} from '@type/roadmap/components';

// this is the component that manages the state of a specific part of a node
function StateAugmentedComponent() {
  const StateManger = ({
    data,
    EditingComponent,
    NonEditingComponent,
    persistDataSave,
  }: {
    data: string;
    EditingComponent: React.FC<EditingComponentBasicProps>;
    NonEditingComponent: React.FC<NonEditingComponentBasicProps>;
    persistDataSave(newVal: string): void;
  }) => {
    // does the editing state management
    const [editing, setEditing] = useState(true);
    const [state, setState] = useState(data || '');

    return editing ? (
      <EditingComponent
        data={state}
        onChange={(value: string) => {
          setState(value);
        }}
        onSave={() => {
          setEditing(false);
          persistDataSave(state); // saves the changes to the global store
        }}
        onCancel={() => {
          setEditing(false);
        }}
      />
    ) : (
      <NonEditingComponent
        data={data}
        setCb={() => {
          setEditing(true);
        }}
      />
    );
  };
  return StateManger;
}

export default StateAugmentedComponent;