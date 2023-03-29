import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { addZoom } from '@typescript/testscript';
import * as d3 from 'd3';
import NodeManager from './NodeManager';

const Roadmap = () => {
  const nodes = [
    {
      id: 'id1',
      x: 100,
      y: 100,
    },

    {
      id: 'id2',
      x: 100,
      y: 300,
    },
    {
      id: 'id3',
      x: 100,
      y: 500,
    },
  ];
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
    // renders some elements in svg based on an array
    const g = document.getElementById('rootGroup');
    addZoom('#rootSvg', '#rootGroup');
    // Perform the data join
    const nodeSelection = d3
      .select(g)
      .selectAll('g')
      .data(nodes, (d) => {
        return d.id;
      }); // Use the data value as the key function

    nodeSelection
      .enter()
      .append('g')
      .attr('id', (d) => d.id)
      .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
      .each(function (d, idx) {
        const current = d3.select(this);
        const foreignObject = current
          .append('foreignObject')
          .attr('x', '0')
          .attr('y', '0')
          .attr('width', '0')
          .attr('height', '0')
          .attr('overflow', 'visible');

        // Render the TestComp2 component inside the foreignObject
        const root = ReactDOM.createRoot(foreignObject.node());
        root.render(
          <NodeManager
            nodeType='Node'
            sizeCb={(width: number, height: number) => {
              // sets foreignObject size to the size of the rendered component
              foreignObject.attr('width', width).attr('height', height);
            }}
            title='Test'
            width='100px'
            height='50px'
            bgColor='white'
            resourceCb={() => {
              // add 2 numbers
              return 2 + 2;
            }}
          />
        );
      });
  }, []);

  return (
    <div className='w-full h-full '>
      <svg id='rootSvg' width='100%' height='100%'>
        <g id='rootGroup'>{/* placeholder for eslint to not scream at me */}</g>
      </svg>
    </div>
  );
};

export default Roadmap;
