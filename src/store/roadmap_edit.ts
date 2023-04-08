import { atom } from 'nanostores';
import {
  generateAbout,
  generateIssue,
  generateResSubNode,
  generateInfoTab,
  generateResource,
  generateNode,
  generateEmptyResource,
  generateEmptyNode,
} from '@typescript/generators';
import { Roadmap } from '@type/roadmap/roadmap';
import { AboutTab, InfoTab, IssuesTab } from '@type/roadmap/tab';
import {
  NodeIdentifierTypes,
  NodeStore,
  NodeTypes,
  ResourceStore,
  ResourceSubNodeStore,
} from '@type/roadmap/nodes';
import {
  isNodeProps,
  isResourceProps,
  isResourceStore,
} from '@type/roadmap/typecheckers';

const roadmapEdit = atom({
  about: generateAbout('', '', ''),
  issues: {
    id1Issue: generateIssue('id1Issue', 'Issue 1', 'Author 1'),
    id2Issue: generateIssue('id2Issue', 'Issue 2', 'Author 2'),
    id3Issue: generateIssue('id3Issue', 'Issue 3', 'Author 3'),
  },

  data: {
    // the basic nodes data
    tabid0: generateInfoTab(
      'tabid0',
      'ESLint',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      { id: '42124', title: 'Eslint roadmap' },
      'this is some lorem ipsum addition info'
    ),
  },

  nodes: {
    // list of all nodes
    idnode1: generateNode('idnode1', 'Node1', 'tabid0', 100, 100),
  },
  resourceSubNodes: {
    // list of all resource nodes
    resourceSubNodeId1: generateResSubNode(
      'resourceSubNodeId1',
      'idnonexistent',
      'Resource Node 1',
      'tabid0'
    ),
  },
} as Roadmap);

export function changeAbout(property: keyof AboutTab, value: string) {
  const original = roadmapEdit.get();
  const { about } = original;
  about[property] = value;
  roadmapEdit.set({ ...original, about });
}

export function changeInfoTabProp(
  id: string,
  property: keyof InfoTab,
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

export function changeInfoTab(id: string, tab: InfoTab) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) return;
  data[id] = tab;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeInfoTabLink(
  id: string,
  index: number,
  property: keyof InfoTab['links'][0],
  value: string
) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) {
    throw new Error('No data found for given id');
    return;
  }
  data[id].links[index][property] = value;
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeInfoTabRoadmapId(id: string, newId: string) {
  const original = roadmapEdit.get();
  const { data } = original;
  if (!data[id]) {
    throw new Error('No data found for given id');
    return;
  }
  data[id].roadmap.id = newId;
}

export function addNewTab(newId: string, newTab: InfoTab) {
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
  const newTab = generateInfoTab(
    newId,
    'New Tab',
    false,
    '',
    [],
    null,
    'Add some additional info here'
  );
  addNewTab(newId, newTab);
  return newId;
}

export function addNewBlankTab(newId: string) {
  const original = roadmapEdit.get();
  const { data } = original;
  data[newId] = generateInfoTab(newId, '', false, '', [], null, '');
  original.data = data;
  roadmapEdit.set({ ...original });
}

export function changeAnyNode(
  id: string,
  property: keyof (NodeStore & ResourceStore),
  value: any
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  nodes[id][property] = value;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function changeInfoNode(
  id: string,
  property: keyof NodeStore,
  value: any
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  nodes[id][property] = value;
  original.nodes = nodes;
  console.log(original);
  roadmapEdit.set({ ...original });
}

export function changeNodeType(
  id: string,
  type: 'Resource' | 'Node',
  title: string
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  // generate new Node based on type
  const nodeMapping = {
    Resource: generateEmptyResource,
    Node: generateEmptyNode,
  };
  const currentNode = nodes[id];
  const newNode = nodeMapping[type](id, title, currentNode.x, currentNode.y);
  if (isNodeProps(newNode) && type === 'Node') {
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

export function replaceInfoNode(id: string, node: NodeStore) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  nodes[id] = node;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function changeResourceNode(
  id: string,
  property: keyof ResourceStore,
  value: any
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') return;
  nodes[id][property] = value;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function changeIssue(id: string, property: keyof IssuesTab, value: any) {
  const original = roadmapEdit.get();
  const { issues } = original;
  issues[id][property] = value;
  original.issues = issues;
  roadmapEdit.set({ ...original });
}

export function changeResourceSubNode(
  id: string,
  property: keyof ResourceSubNodeStore,
  value: any
) {
  const original = roadmapEdit.get();
  const { resourceSubNodes } = original;
  resourceSubNodes[id][property] = value;
  original.resourceSubNodes = resourceSubNodes;
  roadmapEdit.set({ ...original });
}

export function getUnusedResourceSubNodeId() {
  const original = roadmapEdit.get();
  const { resourceSubNodes } = original;
  const ids = Object.keys(resourceSubNodes);
  let newId = 'resourceSubNodeId';
  let appendedNumber = 0;
  while (ids.includes(newId + appendedNumber)) {
    appendedNumber += 1;
  }
  newId += appendedNumber;
  return newId;
}

export function generateEmptyResourceSubNode(
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

export function generateNewResourceSubNode(parentId: string) {
  const original = roadmapEdit.get();
  const { resourceSubNodes } = original;
  const newId = getUnusedResourceSubNodeId();
  const tabId = generateNewTab();
  resourceSubNodes[newId] = generateEmptyResourceSubNode(
    newId,
    tabId,
    parentId
  );
  original.resourceSubNodes = resourceSubNodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function addToResourceNewSubNode(id: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') return;
  const newId = generateNewResourceSubNode(id);
  const currentNode = nodes[id];
  if (!isResourceStore(currentNode)) {
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

export function addEmptyResource(
  id: string,
  title: string,
  x: number,
  y: number
) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  nodes[newId] = generateEmptyResource(newId, title, x, y);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function addEmptyNode(id: string, title: string, x: number, y: number) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const newNode = generateEmptyNode(newId, title, x, y);
  const tabId = generateNewTab();
  newNode.tabId = tabId;
  nodes[newId] = newNode;
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
  return newId;
}

export function getNodeCoods(id: string) {
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
    return addEmptyResource(id, title, x, y);
  }
  if (type === 'Node') {
    return addEmptyNode(id, title, x, y);
  }

  throw new Error('Invalid type');
}

export function addNewNode(parentId: string, type: NodeIdentifierTypes) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  const newId = getUnusedNodeId();
  const { x, y } = getNodeCoods(parentId);
  generationFlow(type, newId, 'newNode', x, y + 200);
  return newId;
}

export function removeFromResourceSubNode(id: string, subNodeId: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') {
    throw new Error('Invalid node type when removing resource subnode');
  }
  const currentNode = nodes[id];
  if (!isResourceStore(currentNode)) {
    throw new Error('Invalid node type when removing resource subnode');
  }
  currentNode.nodes = currentNode.nodes.filter((node) => node !== subNodeId);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
}

export function setRoadmap(roadmap: Roadmap) {
  roadmapEdit.set({ ...roadmap });
}

export function getRoadmap(): Roadmap {
  return roadmapEdit.get();
}

export default roadmapEdit;
