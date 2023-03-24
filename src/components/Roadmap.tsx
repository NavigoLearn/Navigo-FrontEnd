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

    d3.select(g)
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('id', (d) => {
        return '0';
      })
      .attr('transform', (d) => {
        return `translate(${d.x}, ${d.y})`;
      });

    // nodes.map((node) => {
    //   ReactDOM.createRoot(document.getElementById(node.id)).render(
    //     <foreignObject x='0' y='0' width='100' height='100'>
    //       <TestComp2 />
    //     </foreignObject>
    //   );
    // });
  }, []);

  return (
    <div>
      <div>Here is roadmap component</div>
      <svg id='rootSvg' width={'1000px'} height={'1000px'}>
        <g id='rootGroup'>
          {nodes.map((node) => (
            <g id={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <foreignObject x='0' y='0' width='100' height='100'>
                <TestComp2 />
              </foreignObject>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Roadmap;
