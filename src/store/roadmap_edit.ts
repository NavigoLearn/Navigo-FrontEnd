import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateConnection,
  generateIssue,
  generateNNodesInfo,
  generateNodeInfo,
  generateNodeInfoEmpty,
  generateNodeResource,
  generateNodeResourceEmpty,
  generateResourceSubNode,
  generateTabAbout,
  generateTabInfo,
} from '@typescript/generators';
import { TabAbout, TabInfo, TabIssues } from '@type/roadmap/tab';
import {
  NodeIdentifierTypes,
  NodeInfoStore,
  NodeResourceStore,
  NodeStore,
  NodeTypesStore,
} from '@type/roadmap/nodes';
import {
  isNodeInfoProps,
  isNodeInfoStore,
  isNodeResourceStore,
  isNodeTypesStore,
} from '@type/roadmap/typecheckers';
import { ResourceSubNodeStore } from '@type/roadmap/resources';

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

const roadmapEdit = atom({} as Roadmap);

export function changeTabAboutProp<T extends keyof TabAbout>(
  property: T,
  value: TabAbout[T]
) {
  const original = roadmapEdit.get();
  const { about } = original;
  about[property] = value;
  roadmapEdit.set({ ...original, about });
}

export function changeTabInfoProp(
  id: string,
  property: keyof TabInfo,
  value: any
) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) return;
  // eslint-disable-next-line
  // @ts-ignore
  data[id][property] = value;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeTabInfo(id: string, tab: TabInfo) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) return;
  data[id] = tab;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeTabInfoLink(
  id: string,
  index: number,
  property: keyof TabInfo['links'][0],
  value: string
) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) {
    throw new Error('No data found for given id');
  }
  data[id].links[index][property] = value;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function addNewTab(newId: string, newTab: TabInfo) {
  const original = roadmapEdit.get();
  const { data } = original;
  data[newId] = newTab;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function getUnusedTabId() {
  const original = roadmapEdit.get();
  const { data } = original;
  const ids = Object.keys(data);
  let newId = 'tabid';
  let appendedNumber = 0;
  while (ids.includes(newId + appendedNumber)) {
    appendedNumber += 1;
  }
  newId += appendedNumber;
  return newId;
}

export function generateNewTab() {
  const newId = getUnusedTabId();
  const newTab = generateTabInfo(
    newId,
    'New Tab',
    false,
    '',
    [],
    'Add some additional info here'
  );
  addNewTab(newId, newTab);
  return newId;
}

export function addTabBlankNew(newId: string) {
  const original = roadmapEdit.get();
  const { data } = original;
  data[newId] = generateTabInfo(newId, '', false, '', [], '');
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeAnyNode<T extends keyof NodeTypesStore>(
  id: string,
  property: T,
  value: NodeTypesStore[T]
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const node = nodes[id];
  if (!isNodeTypesStore(node)) {
    throw new Error('No node found for given id');
  }
  node[property] = value;
  nodes[id] = node;
  original.nodes = nodes;
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

export function changeNodeType(id: string, type: NodeIdentifierTypes) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  // generate new Node based on type
  const nodeMapping = {
    Resource: generateNodeResourceEmpty,
    Info: generateNodeInfoEmpty,
  };
  const currentNode = nodes[id];
  const newNode = nodeMapping[type](id);
  newNode.parent = currentNode.parent;
  newNode.title = currentNode.title;
  newNode.x = currentNode.x;
  newNode.y = currentNode.y;

  if (isNodeInfoProps(newNode) && type === 'Info') {
    newNode.tabId = generateNewTab();
  } else if (type === 'Resource') {
    // whatever else needs to be done
  } else {
    throw new Error('Invalid type');
  }
  nodes[id] = { ...newNode };
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  console.log('called trigger');
  original.triggers[id]();
}

export function replaceNodeInfo(id: string, node: NodeInfoStore) {
  const original = roadmapEdit.get();
  const { nodes } = original;
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

export function changeIssue(id: string, property: keyof TabIssues, value: any) {
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

export function addResourceSubNodeNew(id: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') return;
  const newId = generateResourceSubNodeNew(id);
  const currentNode = nodes[id];
  if (!isNodeResourceStore(currentNode)) {
    throw new Error('Invalid node type when adding new resource subnor');
  }
  currentNode.nodes.push(newId);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
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
  const tabId = generateNewTab();
  newNode.tabId = tabId;
  newNode.parent = parentId;
  nodes[parentId].children.push(newId);
  nodes[newId] = newNode;
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

export function addNodeNew(parentId: string, type: NodeIdentifierTypes) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const { x, y } = getNodeCoords(parentId);
  // sets parent and children properly
  generationFlow(type, parentId, newId, 'newNode', x, y + 200);
  addConnection(parentId, newId);

  return newId;
}

export function removeResourceSubNode(id: string, subNodeId: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') {
    throw new Error('Invalid node type when removing resource subnode');
  }
  const currentNode = nodes[id];
  if (!isNodeResourceStore(currentNode)) {
    throw new Error('Invalid node type when removing resource subnode');
  }
  currentNode.nodes = currentNode.nodes.filter((node) => node !== subNodeId);
  original.nodes = nodes;
  // remove resource subnode too!
  delete original.resources[subNodeId];
  roadmapEdit.set({ ...original });
}

export function setRoadmap(roadmap: Roadmap) {
  roadmapEdit.set({ ...roadmap });
}

export function getRoadmap(): Roadmap {
  return roadmapEdit.get();
}

export default roadmapEdit;
