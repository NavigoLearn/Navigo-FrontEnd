/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import * as d3 from 'd3';
import node from '@typescript/nodes';
import TestComp from './TestComp';
import TestComp2 from './TestComp2';

const Roadmap = () => {
  let nodes = [
    {
      id: 'id1',
      x: 100,
      y: 100,
      onClick: () => {
        console.log(`I have been clicked almighty maste1`);
      },
    },

    {
      id: 'id2',
      x: 100,
      y: 300,
      onClick: () => {
        console.log(`I have been clicked almighty maste2`);
      },
    },
    {
      id: 'id3',
      x: 100,
      y: 500,
      onClick: () => {
        console.log(`I have been clicked almighty maste3`);
      },
    },
  ];
  useEffect(() => {
    console.log('ran once');
    // renders some elements in svg based on an array
    const g = document.getElementById('rootGroup');
    let nodeE = node({
      x: 100,
      y: 100,
      onClick: () => {
        console.log('I have been clicked almighty maste');
      },
    });
    console.log(nodeE);

    // Perform the data join
    const nodeSelection = d3
      .select(g)
      .selectAll('g')
      .data(nodes, (d) => {
        return d.id;
      }); // Use the data value as the key function

    const enterSelection = nodeSelection
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
              console.log(size);
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
      <svg id='rootSvg' width={'1000px'} height={'1000px'}>
        <g id='rootGroup'>
          {/* {nodes.map((node) => (
            <g
              key={node.id}
              id={node.id}
              transform={`translate(${node.x}, ${node.y})`}
            >
              <foreignObject x='0' y='0' width='100' height='100'>
                <TestComp2 />
              </foreignObject>
            </g>
          ))} */}
        </g>
      </svg>
    </div>
  );
};

export default Roadmap;
