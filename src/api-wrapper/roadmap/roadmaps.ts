import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateStarterNode,
  generateTabInfo,
} from '@typescript/roadmap/generators';
import roadmapState from '@store/roadmap/data/roadmap_state';
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
  info: {
    tab1: generateTabInfo('tab1', 'tab1 Title', false, '', [], ''),
  },
};

const roadmapData = {
  roadmap4,
};

export const a = 1;
export const fetchRoadmapPseudo = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(roadmapData.roadmap4);
    }, networkLatency);
  });
};

export const fetchRoadmap = async (id: string) => {
  // fetches roadmapData from api
  const response = await fetch(`/api/roadmaps/${id}`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
  // decodes the data field from base64 to json
  response.data = JSON.parse(atob(response.data));
  return response;
};

type BackendRoadmapFormat = {
  name: string;
  description: string;
  isPublic: boolean;
  createdAt?: string;
  updatedAt?: string;
  data: string; // base64 encoded json
};
export const updateRoadmapData = async (roadmap: Roadmap) => {
  // posts roadmapData to api
  const { id } = roadmapState.get();
  const response = await fetch(`/api/roadmaps/${id}/data`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      data: btoa(JSON.stringify(roadmap)),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  // posts all the tabs created in cache
  return response.json();
};

export const postRoadmapData = async (roadmap: Roadmap) => {
  // posts roadmapData to api
  const newRoadmap: BackendRoadmapFormat = {
    name: 'test',
    description: 'test',
    isPublic: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    data: btoa(JSON.stringify(roadmap)),
  };

  const response = await fetch('/api/roadmaps/create', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      roadmap: newRoadmap,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  // posts all the tabs created in cache
  return response.json();
};

export const deleteRoadmap = async (id: string) => {
  // deletes roadmapData from api
  const response = await fetch(`/api/roadmaps/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => res);
  return response.json();
};
