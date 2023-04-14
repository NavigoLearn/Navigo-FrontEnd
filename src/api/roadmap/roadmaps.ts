import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateNNodesInfo,
  generateConnection,
  generateResourceSubNode,
} from '@typescript/roadmap/generators';
import { networkLatency } from './params';

const roadmap1: Roadmap = {
  nodes: generateNNodesInfo('title', 'tabid1', 300, 150, 'parent', [''], 2, 2)
    .nodes,
  connections: {
    // list of all connections
    idconnection1: generateConnection('idconnection1', 'idnode1', 'idnode2'),
  },
  resources: {
    // list of all resource nodes
    resourceSubNodeId1: generateResourceSubNode(
      'resourceSubNodeId1',
      'idnode2',
      'Resource Node 1',
      'tabid1'
    ),
    resourceSubNodeId2: generateResourceSubNode(
      'resourceSubNodeId2',
      'idnode2',
      'Resource Node 1',
      'tabid2'
    ),
  },
  chunks: generateNNodesInfo(
    'title',
    'tabid1',
    300,

    150,
    'parent',
    [''],
    2,
    2
  ).chunksNodes,
  chunkSize: 400,
};

const roadmap2: Roadmap = {
  nodes: generateNNodesInfo('title', 'tabid1', 300, 150, 'parent', [''], 5, 5)
    .nodes,
  connections: {
    // list of all connections
    idconnection1: generateConnection('idconnection1', 'idnode1', 'idnode2'),
  },
  resources: {
    // list of all resource nodes
    resourceSubNodeId1: generateResourceSubNode(
      'resourceSubNodeId1',
      'idnode2',
      'Resource Node 1',
      'tabid1'
    ),
    resourceSubNodeId2: generateResourceSubNode(
      'resourceSubNodeId2',
      'idnode2',
      'Resource Node 1',
      'tabid2'
    ),
  },
  chunks: generateNNodesInfo(
    'title',
    'tabid1',
    300,

    150,
    'parent',
    [''],
    5,
    5
  ).chunksNodes,
  chunkSize: 400,
};

const roadmapData = {
  roadmap1,
  roadmap2,
};

export const a = 1;
export const fetchRoadmap = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(roadmapData[id]);
    }, networkLatency);
  });
};
