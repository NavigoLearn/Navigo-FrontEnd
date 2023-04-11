import { TabInfo, TabAbout, TabIssues } from '@type/roadmap/tab';
import { NodeResourceStore, NodeInfoStore } from '@type/roadmap/nodes';
import { ResourceSubNodeStore } from '@type/roadmap/resources';

export function generateTabAbout(
  name: string,
  author: string,
  description: string
): TabAbout {
  return {
    name,
    author,
    description,
  };
}

export function generateIssue(
  id: string,
  title: string,
  author: string
): TabIssues {
  return {
    id,
    title,
    author,
  };
}

export function generateTabInfo(
  id: string,
  title: string,
  done: boolean,
  description: string,
  links: { title: string; link: string }[],
  additionalInfo: string
): TabInfo {
  return {
    id,
    title,
    done,
    description,
    links,
    additionalInfo,
  };
}

export function generateNodeInfo(
  id: string,
  title: string,
  tabId: string,
  x: number,
  y: number,
  parent: string,
  children: string[]
): NodeInfoStore {
  return {
    id,
    title,
    type: 'Info',
    tabId,
    x,
    y,
    parent,
    children,
  };
}

export function calculateChunkId(x, y) {
  const chunkSize = 400;
  return `${Math.floor(x / chunkSize)}_${Math.floor(y / chunkSize)}`;
}
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
  const nodes: any = {};
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      const id = `nodeId${i}_${j}`;
      nodes[id] = generateNodeInfo(
        id,
        id,
        tabId,
        x * i,
        y * j,
        parent,
        children
      );
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

export function generateNodeResource(
  id: string,
  title: string,
  x: number,
  y: number,
  nodes: string[],
  parent: string
): NodeResourceStore {
  return {
    id,
    title,
    type: 'Resource',
    nodes,
    x,
    y,
    parent,
    children: [],
  };
}

export function generateNodeResourceEmpty(id: string): NodeResourceStore {
  return {
    id,
    title: '',
    type: 'Resource',
    nodes: [],
    x: 0,
    y: 0,
    parent: '',
    children: [],
  };
}

export function generateResourceSubNodeEmpty(
  id: string,
  parentId: string,
  title: string,
  tabId: string
): ResourceSubNodeStore {
  return {
    parentId,
    id,
    title,
    type: 'ResourceSubNode',
    tabId,
  };
}

export function generateNodeInfoEmpty(id: string): NodeInfoStore {
  return {
    id,
    title: '',
    type: 'Info',
    tabId: '',
    x: 0,
    y: 0,
    parent: '',
    children: [],
  };
}

export function generateResourceSubNode(
  id: string,
  parentId: string,
  title: string,
  tabId: string
): ResourceSubNodeStore {
  return {
    parentId,
    id,
    title,
    type: 'ResourceSubNode',
    tabId,
  };
}

export function generateConnection(
  id: string,
  parentId: string,
  childId: string
) {
  return {
    id,
    parentId,
    childId,
  };
}
