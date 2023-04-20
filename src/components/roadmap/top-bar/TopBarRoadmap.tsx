import React from 'react';
import Coords from '@components/roadmap/top-bar/Coords';
import Name from '@components/roadmap/top-bar/Name';
import Error from '@components/roadmap/top-bar/Error';
import Recenter from '@components/roadmap/top-bar/Recenter';

const TopBarRoadmap = () => {
  return (
    <div className='w-full h-6 relative bg-blue-100 flex justify-center'>
      <div className=' absolute left-0  h-full pl-2 '>
        <Coords />
      </div>
      <div className=' w-72  relative flex justify-center '>
        <Name />
        <Error />
        <Recenter />
      </div>
    </div>
  );
};

export default TopBarRoadmap;
