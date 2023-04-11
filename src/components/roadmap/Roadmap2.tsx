import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import roadmap from '@store/roadmap';
import roadmapEdit from '@store/roadmap_edit';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import { renderConnections, renderNodes } from '@typescript/roadmap-render';
import { addZoom } from '@typescript/d3utils';
import NodeManager from '@components/roadmap/NodeManager';
import NodeManager2 from '@components/roadmap/NodeManager2';
import Report from './tabs/Report';

const Roadmap2 = () => {
  const { editing } = useStore(roadmapState);
  const roadmapData = useStore(roadmap);
  const roadmapDataEditable = useStore(roadmapEdit);

  useEffect(() => {
    // sets overflow hidden on body
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    return () => {
      // sets overflow auto on body
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    addZoom('#rootSvg', '#rootGroup');
    renderNodes();
    // renderConnections();
  }, [editing, roadmapDataEditable, roadmapData]);

  return (
    <div className='w-full h-full '>
      <Report />
      <svg id='rootSvg' width='100%' height='100%'>
        <g id='rootGroup'>
          <g id='rootGroupConnections'>
            {/* placeholder for eslint to not scream at me */}
          </g>
          <g id='rootGroupNodes'>
            {/* placeholder for eslint to not scream at me */}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Roadmap2;
