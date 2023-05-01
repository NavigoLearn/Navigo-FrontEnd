import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateNodeInfo,
  generateStarterNode,
  generateTabInfo,
} from '@typescript/roadmap/generators';
import { calculateChunkId } from '@typescript/roadmap/utils';
import { cacheTabInfo } from '@store/runtime-roadmap/cached-tabs';
import { diffTabInfoNew } from '@store/runtime-roadmap/diff-tabs';

export const generateInitialEditCreate = (): Roadmap => {
  const initialTab = generateTabInfo('tab1', 'tab1 Title', false, '', [], '');
  cacheTabInfo('tab1', initialTab);
  diffTabInfoNew('tab1', initialTab);

  return {
    // has the boilerplate for the create roadmap
    nodes: generateStarterNode('tab1', 300, 150, 'root', []).nodes,
    connections: {
      // list of all connections
    },
    resources: {
      // list of all resource nodes
    },
    chunks: generateStarterNode(
      'rootNodeId',
      300,

      150,
      'parent',
      []
    ).chunkNodes,
    info: {
      // list of all tab info
      tab1: initialTab,
    },
  };
};

const roadmapEdit = atom({} as Roadmap);

export function generateNNodesInfo(
  title: string,
  tabId: string,
  x: number,
  y: number,
  parent: string,
  children: string[],
  n: number,
  m: number
): any {
  // used for stress testing roadmap_static rendering capabilities and optimizations
  const nodes: any = {};
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      const id = `nodeId${i}_${j}`;
      const chunk = calculateChunkId(x * i, y * j);
      nodes[id] = generateNodeInfo(
        id,
        id,
        tabId,
        x * i,
        y * j,
        parent,
        children,
        [],
        chunk
      );
      nodes[id].level = 'main';
    }
  }
  const chunksNodes: any = {};

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      const id = `nodeId${i}_${j}`;
      const chunkId = calculateChunkId(nodes[id].x, nodes[id].y);
      if (!chunksNodes[chunkId]) {
        chunksNodes[chunkId] = [];
      }
      chunksNodes[chunkId].push(id);
    }
  }
  return {
    nodes,
    chunksNodes,
  };
}

export default roadmapEdit;
