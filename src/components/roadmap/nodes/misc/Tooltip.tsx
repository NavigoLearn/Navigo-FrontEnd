import * as d3 from 'd3';
import React, { useState, useEffect } from 'react';
import { useToolTip } from '@store/runtime/miscParams';
import { setTriggerTooltip } from '@store/runtime/rerenderTriggers';
import { useStore } from "@nanostores/react";
import viewportCoord from "@store/runtime/viewport-coords";

const Tooltip = ({ id }: { id: string }) => {
  // get the scale from the store (throttled, so a better way should be found)
  const { scale } = useStore(viewportCoord);

  const isSafari =
    navigator.userAgent.indexOf('Safari') != -1 &&
    navigator.userAgent.indexOf('Chrome') == -1;

  // render tells if the tooltip should be rendered again
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTriggerTooltip(id, () => {
      setRender((prevState) => !prevState);
    });
  }, []);

  // gets current tooltip that should be displayed
  const options = useToolTip(id);
  if (!options) return null;

  return (
    <div
      className={`fixed bottom-0 w-full`}
      style={isSafari
        ? {
        transform:`scale(${scale})`,
        transformOrigin: 'top left'
      } : {}}
    >
      {options()}
    </div>
  );
};

export default Tooltip;
