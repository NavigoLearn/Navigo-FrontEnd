import React from 'react';
import useStateAndRef from '@hooks/useStateAndRef';
import { HOCProps, StateManagerProps } from '@type/roadmap/old/components';

export default <T,>(WrappedComponent: StateManagerProps<T>) => {
  const HOCComponent = ({ originalValue, onChange }: HOCProps<T>) => {
    // simple state management for the wrapped component
    const [localState, setLocalState, localStateRef] =
      useStateAndRef<T>(originalValue);
    return (
      <WrappedComponent
        value={localState}
        onChange={(newVal: T) => {
          setLocalState(newVal);
          onChange(newVal); // saving to the placeholder roadmap state
        }}
      />
    );
  };

  return HOCComponent;
};
