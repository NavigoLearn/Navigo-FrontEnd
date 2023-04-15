import React, { useEffect, useRef } from 'react';

import NodeManager from '@components/roadmap/NodeManager';
import { useStore } from '@nanostores/react';
import roadmapState, { setRoadmapId } from '@store/roadmap_state';
import roadmapStatic, { setRoadmapFromAPI } from '@store/roadmap_static';
import { setTrigger } from '@store/runtime/rerenderTriggers';
import { addZoom } from '@typescript/roadmap/d3utils';
import { RoadmapChunkingManager } from '@typescript/roadmap/chunks-logic';
import renderNodesStore from '@store/runtime/renderedNodes';
import { setChunkRerenderTrigger } from '@store/runtime/renderedChunks';
import renderConnectionsStore from '@store/runtime/renderedConnections';
import { renderConnections } from '@typescript/roadmap/roadmap-render';
import Report from './tabs/Report';

const Roadmap = ({ pageId }: { pageId: string }) => {
  const { editing } = useStore(roadmapState);
  // the ids of the nodes that need to be rendered accorind to the current view and the chunks visible
  const { nodes: nodesIds } = useStore(renderNodesStore); // used to trigger a rerender when the nodes change
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
    setRoadmapId(pageId);
    // fetches the data from the api
    setRoadmapFromAPI(pageId); // when request finishes it triggers chunk renderer which sets the nodes and connections to render
    // to their respective stores. The node rendering is triggered by the rerender of the Roadmap component
    // for the connections we need to subscribe to the store with a callback
    renderConnectionsStore.subscribe(() => {
      // calling the connection rendering function
      setTimeout(() => {
        // wait for event loop to finish eendering the nodes and then render the connections
        renderConnections();
      }, 0);
    });

    return () => {
      console.log('cleanup');
      // cleaning up runtime stores to not interfere with other roadmaps
      // cache cleanup
      // diff cleanup
      // renderedChunks cleanup
      // renderedNodes cleanup
      // renderedTriggers cleanup
      // tab manager cleanup
    };
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
