import React from 'react';
import StateMangerCallbacks from '@components/roadmap/nodes/HOCs/StateMangerLocal';
import {
  checkPossibleTypes,
  WrappedComponentProps,
} from '@type/roadmap/old/components';

const InfoTitleEdit = <T,>({
  onChange,
  value: localVal,
}: WrappedComponentProps<T>) => {
  if (!checkPossibleTypes(localVal)) {
    throw new Error('localVal is not of type string');
  }
  return (
    <input
      className={` h-8 font-roboto-text  w-full flex justify-center items-center  text-center border-2 border-gray-200 outline-none `}
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

export default StateMangerCallbacks(InfoTitleEdit);
