import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { addZoom } from '@typescript/d3utils';
import * as d3 from 'd3';
import roadmap from '@store/roadmap';
import { useStore } from '@nanostores/react';
import { NodeTypes } from '@type/roadmap/nodes';
import Report from './tabs/Report';
import NodeManager from './NodeManager';

const Roadmap = () => {
  const roadmapData = useStore(roadmap);

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

  function renderNode(root, data: NodeTypes, foreignObject) {
    root.render(
      <NodeManager
        data={data}
        sizeCb={(width: number, height: number) => {
          // sets foreignObject size to the size of the rendered component
          foreignObject.attr('width', width).attr('height', height);
        }}
      />
    );
  }

  function appendToD3(obj, data: NodeTypes) {
    const current = d3.select(obj);
    const foreignObject = current
      .append('foreignObject')
      .attr('x', '0')
      .attr('y', '0')
      .attr('width', '0')
      .attr('height', '0')
      .attr('overflow', 'visible');
    const rootDiv = foreignObject.append('xhtml:div');
    // added a div to the foreignObject as a workaround for a bug in d3
    // If I rendered the comp directly beneath the foreignObject it would get a weird click effect with a border showing up
    const root = ReactDOM.createRoot(rootDiv.node());
    renderNode(root, data, foreignObject);
  }

  useEffect(() => {
    // renders some elements in svg based on an array
    const { nodes } = roadmapData;
    // creates array from the nodes json object
    const nodesArray = Object.keys(nodes).map((key) => nodes[key]);
    const g = document.getElementById('rootGroup');
    addZoom('#rootSvg', '#rootGroup');
    // Perform the data join
    const nodeSelection = d3
      .select(g)
      .selectAll('g')
      .data(nodesArray, (d) => {
        return d.id;
      }); // Use the data value as the key function

    nodeSelection
      .enter()
      .append('g')
      .attr('id', (d) => d.id)
      .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
      .each(function (data, idx) {
        appendToD3(this, data);
      });
  }, []);

  return (
    <div className='w-full h-full '>
      <Report />
      <svg id='rootSvg' width='100%' height='100%'>
        <g id='rootGroup'>{/* placeholder for eslint to not scream at me */}</g>
      </svg>
    </div>
  );
};

export default Roadmap;
