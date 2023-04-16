import React from 'react';
import StateMangerCallbacks from '@components/roadmap/nodes/HOCs/StateMangerCallbacks';
import {
  checkPossibleTypes,
  WrappedComponentProps,
} from '@type/roadmap/components';

const TitleEdit = <T,>({
  onChange,
  value: localVal,
}: WrappedComponentProps<T>) => {
  if (!checkPossibleTypes(localVal)) {
    throw new Error('localVal is not of type string');
  }

  return (
    <input
      className={` pointer-events-auto text-lg  text-placeholder w-full flex justify-center items-center border-2 border-gray-200 outline-none `}
      value={localVal}
      onChange={(e) => {
        const newLocalVal = e.target.value;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange(newLocalVal);
      }}
    />
  );
};

export default StateMangerCallbacks(TitleEdit);
