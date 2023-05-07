import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { Coord } from '@type/roadmap/nodes';
import viewportCoord from '@store/roadmap/misc/viewport-coords';

const Coords = () => {
  const { startX, startY, scale } = useStore(viewportCoord);

  return (
    <div className='w-full flex gap-4 justify-center md:justify-start'>
      <div className='text-secondary text-sm md:text-base'>X: {startX}</div>
      <div className='text-secondary text-sm md:text-base'>Y: {startY}</div>
      <div className='text-secondary text-sm md:text-base'>Scale: {scale}</div>
    </div>
  );
};

export default Coords;
