import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { addZoom } from '@typescript/testscript';
import * as d3 from 'd3';
import TestComp2 from './TestComp2';

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
      .each(function (d) {
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
          <TestComp2
            sizeCb={(size: any) => {
              // console.log(size);
              foreignObject.attr('width', size.width);
              foreignObject.attr('height', size.height);
            }}
          />
        );
      });
  }, []);

  return (
    <div>
      <div>Here is roadmap component</div>
      <svg id='rootSvg' width='1000px' height='1000px'>
        <g id='rootGroup'>{/* placeholder for eslint to not scream at me */}</g>
      </svg>
    </div>
  );
};

export default Roadmap;
