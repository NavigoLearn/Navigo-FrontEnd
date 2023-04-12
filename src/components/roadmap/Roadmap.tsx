import React, { useEffect, useState, useRef } from 'react';

import NodeManager from '@components/roadmap/NodeManager';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import roadmapStatic from '@store/roadmap_static';
import { setTrigger } from '@store/runtime/rerenderTriggers';
import { addZoom } from '@typescript/roadmap/d3utils';
import { RoadmapChunkingManager } from '@typescript/roadmap/chunks-logic';
import renderNodesStore from '@store/runtime/renderedNodes';
import { setChunkRerenderTrigger } from '@store/runtime/renderedChunks';
import Report from './tabs/Report';

const Roadmap = () => {
  const { editing } = useStore(roadmapState);
  // the ids of the nodes that need to be rendered accorind to the current view and the chunks visible
  const { nodes: nodesIds } = useStore(renderNodesStore);
  const { nodes: nodesValues } = roadmapStatic.get();

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

  const renderer = useRef(null);

  useEffect(() => {
    // renderer object that handles chunking
    renderer.current = new RoadmapChunkingManager('rootSvg');
    // sets the trigger for chunk recalculations to a global state
    setChunkRerenderTrigger(
      // used for decorators
      renderer.current.recalculateChunks.bind(renderer.current)
    );
  }, []);

  useEffect(() => {
    // adding zoom and a callback for chunk recalculations (the cb is throttled to 50ms, see class)
    addZoom(
      'rootSvg',
      'rootGroup',
      renderer.current.recalculateChunks.bind(renderer.current)
    );
  }, [editing]);

  return (
    <div className='w-full h-full '>
      <Report />
      <svg id='rootSvg' width='100%' height='100%'>
        <g id='rootGroup'>
          <g id='rootGroupConnections'>
            {/* placeholder for eslint to not scream at me */}
          </g>
          <g id='rootGroupNodes'>
            {nodesIds.map((id) => {
              // gets the data
              const data = nodesValues[id];
              return (
                <NodeManager
                  key={id}
                  data={data}
                  editing={editing}
                  triggerCb={async (cb) => {
                    setTrigger(id, cb);
                  }}
                />
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Roadmap;
