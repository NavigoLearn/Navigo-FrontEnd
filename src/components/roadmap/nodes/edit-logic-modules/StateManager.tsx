import React, { useState } from 'react';
import useStateAndRef from '@hooks/useStateAndRef';

import { StateManagerProps } from '@type/roadmap/components';
import {
  getTriggerDisable,
  getTriggerEnable,
} from '@store/runtime/rerenderTriggers';
import {
  increaseEditingCount,
  decreaseEditingCount,
  setToolTip,
} from '@store/runtime/miscParams';

// this component is meant for local editing of a field with and edit toggle and an editing and nonediting component
function StateAugmentedComponent(id: string) {
  const StateManger = <T,>({
    value,
    EditingComponent,
    NonEditingComponent,
    persistDataSave,
  }: StateManagerProps<T>) => {
    // does the state management for a specific part of a node

    const [localState, setLocalState, localStateRef] = useStateAndRef<T>(value);
    const [editing, setEditing] = useState(false);
    // some properties need to have a dual state of edit and non edit like title
    return editing ? (
      <EditingComponent
        id={id}
        value={localState}
        onChange={(newVal: T) => {
          // saves value to local storage in component
          setLocalState({ ...newVal });
        }}
        onSave={() => {
          persistDataSave(localStateRef.current); // saves the changes to the global store
          getTriggerEnable(id)();
          decreaseEditingCount();
          setToolTip(id, () => null);
          setEditing(false);
        }}
        onCancel={() => {
          setLocalState(value);
          getTriggerEnable(id)();
          decreaseEditingCount();
          setToolTip(id, () => null);
          setEditing(false);
        }}
      />
    ) : (
      <NonEditingComponent
        value={localState}
        id={id}
        setCb={() => {
          // blocking the drag and drop of the node
          increaseEditingCount();
          getTriggerDisable(id)();
          setEditing(true);
        }}
      />
    );
  };
  return StateManger;
}

export default StateAugmentedComponent;
