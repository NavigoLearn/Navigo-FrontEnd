import { useState, useRef } from 'react';

function useStateAndRef<T>(initialValue: T) {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(initialValue);

  stateRef.current = state;

  return [state, setState, stateRef] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
    React.MutableRefObject<T>
  ];
}

export default useStateAndRef;
