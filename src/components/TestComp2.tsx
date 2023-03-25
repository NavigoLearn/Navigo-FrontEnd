import React, { useRef, useEffect } from 'react';

type TestComp2Props = {
  sizeCb: (size: any) => void;
};

const TestComp2 = ({ sizeCb }: TestComp2Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // calls the callback function with the size of the div
    if (rootRef.current) {
      sizeCb(rootRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <div ref={rootRef} className='w-48 h-48 border-2 border-white'>
      Inside Node here pls work
    </div>
  );
};

export default TestComp2;
