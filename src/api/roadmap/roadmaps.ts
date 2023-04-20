import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateNNodesInfo,
  generateConnection,
  generateStarterNode,
} from '@typescript/roadmap/generators';
import { networkLatency } from './params';
//
// const roadmap1: Roadmap = {
//   nodes: generateNNodesInfo('title', 'tabid1', 300, 150, 'parent', [''], 2, 2)
//     .nodes,
//   connections: {
//     // list of all connections
//   },
//   resources: {
//     // list of all resource nodes
//   },
//   chunks: generateNNodesInfo(
//     'title',
//     'tabid1',
//     300,
//
//     150,
//     'parent',
//     [''],
//     2,
//     2
//   ).chunksNodes,
//   chunkSize: 400,
// };
//
// const roadmap2: Roadmap = {
//   nodes: generateNNodesInfo('title', 'tabid1', 300, 150, 'parent', [''], 5, 5)
//     .nodes,
//   connections: {
//     // list of all connections
//   },
//   resources: {
//     // list of all resource nodes
//   },
//   chunks: generateNNodesInfo(
//     'title',
//     'tabid1',
//     300,
//
//     150,
//     'parent',
//     [''],
//     5,
//     5
//   ).chunksNodes,
//   chunkSize: 400,
// };
//
// const roadmap3: Roadmap = {
//   nodes: generateNNodesInfo('title', 'tabid1', 300, 150, 'parent', [''], 5, 5)
//     .nodes,
//   connections: {
//     // list of all connections
//   },
//   resources: {
//     // list of all resource nodes
//   },
//   chunks: generateNNodesInfo(
//     'title',
//     'tabid1',
//     300,
//
//     150,
//     'parent',
//     [''],
//     5,
//     5
//   ).chunksNodes,
//   chunkSize: 400,
// };
//
// function addConn(idNode1, idNode2) {
//   roadmap3.connections[`${idNode1}${idNode2}`] = generateConnection(
//     `${idNode1}${idNode2}`,
//     idNode1,
//     idNode2
//   );
//   roadmap3.nodes[idNode1].connections.push(`${idNode1}${idNode2}`);
//   roadmap3.nodes[idNode2].connections.push(`${idNode1}${idNode2}`);
// }
//
// addConn('nodeId0_0', 'nodeId2_2');
// addConn('nodeId0_0', 'nodeId1_2');
// addConn('nodeId0_0', 'nodeId2_1');
// addConn('nodeId0_0', 'nodeId1_1');
// addConn('nodeId0_0', 'nodeId2_0');
// addConn('nodeId0_0', 'nodeId1_0');
// addConn('nodeId0_0', 'nodeId0_1');
// addConn('nodeId0_0', 'nodeId0_2');
//
const roadmap4: Roadmap = {
  nodes: generateStarterNode('tabid1', 300, 150, 'root', []).nodes,
  connections: {
    // list of all connections
  },
  resources: {
    // list of all resource nodes
  },
  chunks: generateStarterNode(
    'tabid1',
    300,

    150,
    'parent',
    []
  ).chunkNodes,
  chunkSize: 400,
};

const roadmapData = {
  roadmap4,
};

export const a = 1;
export const fetchRoadmap = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(roadmapData.roadmap4);
    }, networkLatency);
  });
};
