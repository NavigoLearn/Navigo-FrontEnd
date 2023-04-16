import React, { useState, useEffect } from 'react';
import { useToolTip } from '@store/runtime/miscParams';
import { setTriggerTooltip } from '@store/runtime/rerenderTriggers';

const Tooltip = ({ id }: { id: string }) => {
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

  return <div className='absolute bottom-0 w-full'>{options()}</div>;
};

export default Tooltip;
