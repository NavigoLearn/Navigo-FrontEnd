import React from 'react';
import { useStore } from '@nanostores/react';
import errorList from '@store/roadmap/error-list';
import ErrorDisplay from '@components/roadmap/top-bar/ErrorDisplay';

const Error = () => {
  const { errors, errorUpTime } = useStore(errorList);
  return (
    <div className=' w-72 absolute top-10 flex flex-col gap-2'>
      {errors.map((error) => {
        return (
          <ErrorDisplay
            key={error.id}
            message={error.message}
            time={errorUpTime}
          />
        );
      })}
    </div>
  );
};

export default Error;
