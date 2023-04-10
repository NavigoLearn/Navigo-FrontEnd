import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateConnection,
  generateIssue,
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

const roadmapEdit = atom({
  about: generateTabAbout('', '', ''),
  issues: {
    id1Issue: generateIssue('id1Issue', 'Issue 1', 'Author 1'),
    id2Issue: generateIssue('id2Issue', 'Issue 2', 'Author 2'),
    id3Issue: generateIssue('id3Issue', 'Issue 3', 'Author 3'),
  },

  data: {
    // the basic nodes data
    tabid0: generateTabInfo(
      'tabid0',
      'ESLint',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),

    tabid1: generateTabInfo(
      'tabid1',
      'Some react roadmp1',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),
    tabid2: generateTabInfo(
      'tabid2',
      'Prettier node',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),
  },

  nodes: {
    // list of all nodes
    idnode1: generateNodeInfo('idnode1', 'Node1', 'tabid0', 100, 100),
    idnode2: generateNodeResource('idnode2', 'Resource1', 300, 300, [
      'resourceSubNodeId1',
      'resourceSubNodeId2',
    ]),
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
  connections: {
    // list of all connections
    idconnection1: generateConnection('idconnection1', 'idnode1', 'idnode2'),
  },
} as Roadmap);

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

export function changeNodeType(
  id: string,
  type: NodeIdentifierTypes,
  title: string
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  // generate new Node based on type
  const nodeMapping = {
    Resource: generateNodeResourceEmpty,
    Info: generateNodeInfoEmpty,
  };
  const currentNode = nodes[id];
  const newNode = nodeMapping[type](id, title, currentNode.x, currentNode.y);
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
  id: string,
  title: string,
  x: number,
  y: number
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  nodes[newId] = generateNodeResourceEmpty(newId, title, x, y);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function addNodeInfoEmpty(
  id: string,
  title: string,
  x: number,
  y: number
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const newNode = generateNodeInfoEmpty(newId, title, x, y);
  const tabId = generateNewTab();
  newNode.tabId = tabId;
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
  id: string,
  title: string,
  x: number,
  y: number
) {
  if (type === 'Resource') {
    return addNodeResourceEmpty(id, title, x, y);
  }
  if (type === 'Info') {
    return addNodeInfoEmpty(id, title, x, y);
  }

  throw new Error('Invalid type');
}

export function addNodeNew(parentId: string, type: NodeIdentifierTypes) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const { x, y } = getNodeCoords(parentId);
  generationFlow(type, newId, 'newNode', x, y + 200);

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
