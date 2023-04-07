import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { addZoom } from '@typescript/d3utils';
import * as d3 from 'd3';
import roadmap from '@store/roadmap';
import roadmapEdit, { changeAnyNode } from '@store/roadmap_edit';
import { useStore } from '@nanostores/react';
import { NodeTypes } from '@type/roadmap/nodes';
import roadmapState from '@store/roadmap_state';
import Report from './tabs/Report';
import NodeManager from './NodeManager';

const Roadmap = () => {
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

  console.log('Roadmap rerendered');

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
    let foreignObject = current.select('foreignObject');
    foreignObject = current
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
    let nodes;
    if (!editing) {
      nodes = roadmapData.nodes;
    } else {
      nodes = roadmapDataEditable.nodes;
    }
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

    const drag = d3
      .drag()
      .on('start', function () {
        // called when the drag starts
      })
      .on('drag', function (event, d) {
        // called when the element is being dragged
        // d3.select(this).attr('cx', event.x).attr('cy', event.y);
        if (!editing) return;
        d3.select(this).attr('transform', `translate(${event.x}, ${event.y})`);
      })
      .on('end', function (event, d) {
        // saving the new position of the node
        if (!editing) return;
        changeAnyNode(d.id, 'x', event.x);
        changeAnyNode(d.id, 'y', event.y);
      });

    nodeSelection
      .enter()
      .append('g')
      .attr('id', (d) => d.id)
      .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
      .each(function (data, idx) {
        appendToD3(this, data);
      });
    const sel = d3.select('#rootGroup').selectAll('g');
    sel.call(drag);
  }, [editing, roadmapDataEditable, roadmapData]);

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
