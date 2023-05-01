import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { Coord } from '@type/roadmap/nodes';
import viewportCoord from '@store/runtime-roadmap/viewport-coords';

const Coords = () => {
  const { startX, startY, scale } = useStore(viewportCoord);

  return (
    <div className='w-full flex gap-4'>
      <div className='text-secondary'>X: {startX}</div>
      <div className='text-secondary'>Y: {startY}</div>
      <div className='text-secondary'>Scale: {scale}</div>
    </div>
  );
};

export default Coords;
