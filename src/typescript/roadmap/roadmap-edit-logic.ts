import { Roadmap } from '@type/roadmap/roadmap';
import {
  calculateChunkId,
  generateNodeInfoEmpty,
  generateNodeResourceEmpty,
  generateTabInfo,
} from '@typescript/roadmap/generators';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';
import {
  NodeIdentifierTypes,
  NodeInfoStore,
  NodeResourceStore,
} from '@type/roadmap/nodes';
import {
  isNodeInfoStore,
  isNodeResourceStore,
  isNodeTypesStore,
} from '@type/roadmap/typecheckers';
import { ResourceSubNodeStore } from '@type/roadmap/resources';
import roadmapEdit from '@store/roadmap_edit';
import { postTabInfoFlow } from '@typescript/roadmap/tab-logic-flows';
import { getNewTabId } from '../../api/roadmap/tab-data';

/*
The get function naming convention is:
get<type><Object>
eg: getUnusedId
The change function naming convention is:
<action><Object>
eg: changeNodeResourceProp
The add/generate function naming convention is:
add<Object><Type>
generateNodeResourceEmpty
*/

export function addNewTab(newId: string, newTab: TabInfo) {
  // calls the post tab flow
  postTabInfoFlow(newId, newTab);
}

export const getUnusedTabId = async () => {
  // gets the new Id from the API
  return getNewTabId();
};

export function generateNewTab() {
  const newId = getUnusedTabId();
  const newTab = generateTabInfo(
    newId,
    'New TabManager',
    false,
    '',
    [],
    'Add some additional info here'
  );
  addNewTab(newId, newTab);
  return newId;
}

export function addChunkNode(id: string, chunkId: string) {
  // adds a node to a chunk
  const original = roadmapEdit.get();
  const { nodes } = original;
  const node = nodes[id];
  if (!isNodeTypesStore(node)) {
    throw new Error('No node found for given id');
  }
  node.chunk = chunkId;
  nodes[id] = node;
  original.nodes = nodes;
  // adds node to the corresponding chunk
  let chunkArr = original.chunks[chunkId];
  if (!chunkArr) {
    chunkArr = [id];
  } else {
    chunkArr.push(id);
  }
  original.chunks[chunkId] = chunkArr;
  roadmapEdit.set({ ...original });
}

export function removeChunkNode(id: string) {
  // remove a node from a chunk
  const original = roadmapEdit.get();
  const { nodes } = original;
  const node = nodes[id];
  if (!isNodeTypesStore(node)) {
    throw new Error('No node found for given id');
  }
  const { chunk: chunkId } = node;
  // we remove the nodeId from the chunk
  let chunkArr = original.chunks[chunkId];
  if (!chunkArr) return; // if the chunk doesn't exist, we don't need to do anything
  chunkArr = chunkArr.filter((nodeId) => nodeId !== id);
  original.chunks[chunkId] = chunkArr;

  roadmapEdit.set({ ...original });
}

export function changeNodeInfo<T extends keyof NodeInfoStore>(
  id: string,
  property: T,
  value: NodeInfoStore[T]
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const node = nodes[id];
  if (!isNodeInfoStore(node)) {
    throw new Error('No node found for given id');
  }
  node[property] = value;
  nodes[id] = node;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function changeNodeResource<T extends keyof NodeResourceStore>(
  id: string,
  property: T,
  value: NodeResourceStore[T]
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const node = nodes[id];
  if (!isNodeResourceStore(node)) {
    throw new Error('No node found for given id');
  }
  node[property] = value;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function changeIssue<T extends keyof TabIssue>(
  id: string,
  property: T,
  value: TabIssue[T]
) {
  const original = roadmapEdit.get();
  const { issues } = original;
  issues[id][property] = value;
  original.issues = issues;
  roadmapEdit.set({ ...original });
}

export function changeResourceSubNode<T extends keyof ResourceSubNodeStore>(
  id: string,
  property: T,
  value: ResourceSubNodeStore[T]
) {
  const original = roadmapEdit.get();
  const { resources } = original;
  resources[id][property] = value;
  original.resources = resources;
  roadmapEdit.set({ ...original });
}

export function getUnusedResourceSubNodeId() {
  const original = roadmapEdit.get();
  const { resources } = original;
  const ids = Object.keys(resources);
  let newId = 'resourceSubNodeId';
  let appendedNumber = 0;
  while (ids.includes(newId + appendedNumber)) {
    appendedNumber += 1;
  }
  newId += appendedNumber;
  return newId;
}

export function generateResourceSubNodeEmpty(
  id,
  tabId,
  parentId
): ResourceSubNodeStore {
  return {
    id,
    parentId,
    tabId,
    type: 'ResourceSubNode',
    title: '',
  };
}

export function generateResourceSubNodeNew(parentId: string) {
  const original = roadmapEdit.get();
  const { resources } = original;
  const newId = getUnusedResourceSubNodeId();
  const tabId = generateNewTab();
  resources[newId] = generateResourceSubNodeEmpty(newId, tabId, parentId);
  original.resources = resources;
  roadmapEdit.set({ ...original });
  return newId;
}

export function getUnusedNodeId() {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const ids = Object.keys(nodes);
  let newId = 'nodeId';
  let appendedNumber = 0;
  while (ids.includes(newId + appendedNumber)) {
    appendedNumber += 1;
  }
  newId += appendedNumber;
  return newId;
}

export function addNodeResourceEmpty(
  parentId: string,
  id: string,
  title: string,
  x: number,
  y: number
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  nodes[newId] = generateNodeResourceEmpty(newId);
  nodes[newId].title = title;
  nodes[newId].x = x;
  nodes[newId].y = y;
  nodes[newId].parent = parentId;
  nodes[parentId].children.push(newId);
  nodes[newId].chunk = calculateChunkId(x, y);

  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function addNodeInfoEmpty(
  parentId: string,
  id: string,
  title: string,
  x: number,
  y: number
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const newNode = generateNodeInfoEmpty(newId);
  newNode.title = title;
  newNode.x = x;
  newNode.y = y;
  newNode.tabId = generateNewTab();
  newNode.parent = parentId;
  nodes[parentId].children.push(newId);
  nodes[newId] = newNode;
  const chunkId = calculateChunkId(x, y);
  addChunkNode(newId, chunkId);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function getNodeCoords(id: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id]) return null;
  return { x: nodes[id].x, y: nodes[id].y };
}

export function generationFlow(
  type: NodeIdentifierTypes,
  parentId: string,
  id: string,
  title: string,
  x: number,
  y: number
) {
  if (type === 'Resource') {
    return addNodeResourceEmpty(parentId, id, title, x, y);
  }
  if (type === 'Info') {
    return addNodeInfoEmpty(parentId, id, title, x, y);
  }

  throw new Error('Invalid type');
}

export function getUnusedConnectionId() {
  const original = roadmapEdit.get();
  const { connections } = original;
  const ids = Object.keys(connections);
  let newId = 'connectionId';
  let appendedNumber = 0;
  while (ids.includes(newId + appendedNumber)) {
    appendedNumber += 1;
  }
  newId += appendedNumber;
  return newId;
}

export function generateConnectionEmpty(id: string) {
  return {
    id,
    parentId: '',
    childId: '',
  };
}

export function addConnection(parentId: string, childId: string) {
  const original = roadmapEdit.get();
  const { connections } = original;
  const newId = getUnusedConnectionId();
  const newConnection = generateConnectionEmpty(newId);
  newConnection.parentId = parentId;
  newConnection.childId = childId;
  connections[newId] = newConnection;
  original.connections = connections;
  roadmapEdit.set({ ...original });
}

export function removeResourceSubNode(id: string, subNodeId: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') {
    throw new Error('Invalid node type when removing resource subNode');
  }
  const currentNode = nodes[id];
  if (!isNodeResourceStore(currentNode)) {
    throw new Error('Invalid node type when removing resource subNode');
  }
  currentNode.nodes = currentNode.nodes.filter((node) => node !== subNodeId);
  original.nodes = nodes;
  // remove resource subNode too!
  delete original.resources[subNodeId];
  roadmapEdit.set({ ...original });
}

export const getNodeById = (id: string) => {
  const original = roadmapEdit.get();
  const { nodes } = original;
  return nodes[id];
};

export function setRoadmap(roadmap: Roadmap) {
  roadmapEdit.set({ ...roadmap });
}

export function getRoadmap(): Roadmap {
  return roadmapEdit.get();
}
