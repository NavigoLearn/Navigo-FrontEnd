import zoomIn from '@assets/zoomIn.svg';
import zoomOut from '@assets/zoomOut.svg';
import recenterCompass from '@assets/recenterCompass.svg';
import viewportCoord from '@store/roadmap/misc/viewport-coords'
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';

const RoadmapController = () => {
  const { startX, startY, scale} = useStore(viewportCoord);
  const [_, setRendered] = useState(false);

  useEffect(() => {
    setRendered((prev) => !prev);
  }, [startX, startY, scale]);

  return (
    <div className="flex gap-4">
      <div className="flex justify-between w-36 rounded-xl bg-white py-0.5 px-2 drop-shadow-xl">
        <button id="zoomout-button">
          <img className="m-1 h-6 w-6" src={zoomOut} alt="Zoom out button"/>
        </button>
        <p className="text-middle m-1">{Math.floor(scale*100)}%</p>
        <button id="zoomin-button">
          <img className="m-1 h-6 w-6" src={zoomIn} alt="Zoom in button"/>
        </button>
      </div>
      <div className="flex justify-evenly min-w-[160px] w-fit rounded-xl bg-white py-0.5 px-2 drop-shadow-xl">
        <p className="text-middle m-1">X: {-startX}</p>
        <p className="text-middle m-1">Y: {startY}</p>
      </div>
      <div className="rounded-xl bg-white py-0.5 px-2 drop-shadow-xl">
        <button className="flex" id="recenter-button">
          <img className="m-1 h-6 w-6" src={recenterCompass} alt="Zoom out button"/>
          <p className="text-middle m-1">Recenter</p>
        </button>
      </div>
    </div>
  )
}

export default RoadmapController;