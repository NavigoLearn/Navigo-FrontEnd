import {
  triggerRerenderDecorator,
  triggerChunkRecalculationDecorator,
  triggerChunkRerenderDecorator,
  manualTrigger,
  triggerRerenderAllDecorator,
} from '@typescript/roadmap/roadmap-edit-decorators';
import { NodeIdentifierTypes, NodeInfoStore } from '@type/roadmap/nodes';
import { LevelTypes } from '@type/roadmap/level-types';
import roadmapEdit from '@store/roadmap_edit';
import {
  isNodeInfoProps,
  isNodeInfoStore,
  isNodeResourceStore,
  isNodeTypesStore,
} from '@type/roadmap/typecheckers';
import {
  generateNodeInfoEmpty,
  generateNodeResourceEmpty,
} from '@typescript/roadmap/generators';
import {
  generateNewTab,
  generateResourceSubNodeNew,
  generationFlow,
  getUnusedNodeId,
} from '@typescript/roadmap/roadmap-edit-logic';
import { ResourceSubNodeStore } from '@type/roadmap/resources';
import state from '@store/roadmap_state';
import { getNodeCoords } from '@typescript/roadmap/roadmap-render';

export const changeNodeCoords = triggerRerenderDecorator(
  triggerChunkRecalculationDecorator((id: string, x: number, y: number) => {
    const original = roadmapEdit.get();
    const { nodes } = original;
    const node = nodes[id];
    if (!isNodeTypesStore(node)) {
      throw new Error('No node found for given id');
    }
    node.x = x;
    node.y = y;
    nodes[id] = node;
    original.nodes = nodes;
    roadmapEdit.set({ ...original });
  })
);

export const removeResourceSubNode = triggerRerenderDecorator(
  (id: string, subNodeId: string) => {
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
);
export const changeNodeLevel = triggerRerenderDecorator(
  (id: string, level: LevelTypes) => {
    const original = roadmapEdit.get();
    const { nodes } = original;
    const node = nodes[id];
    if (!isNodeTypesStore(node)) {
      throw new Error('No node found for given id');
    }
    node.level = level;
    nodes[id] = node;
    original.nodes = nodes;
    roadmapEdit.set({ ...original });
  }
);

export const changeNodeType = triggerRerenderDecorator(
  (id: string, type: NodeIdentifierTypes) => {
    const original = roadmapEdit.get();
    const { nodes } = original;
    // generate new Node based on the type
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
    newNode.chunk = currentNode.chunk;
    newNode.level = currentNode.level;
    newNode.children = currentNode.children;

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
);

export const addResourceSubNodeNew = triggerRerenderDecorator((id: string) => {
  const original = roadmapEdit.get();
  const { nodes } = original;
  if (!nodes[id] || nodes[id].type !== 'Resource') return;
  const newId = generateResourceSubNodeNew(id);
  const currentNode = nodes[id];
  if (!isNodeResourceStore(currentNode)) {
    throw new Error('Invalid node type when adding new resource subNode');
  }
  currentNode.nodes.push(newId);
  original.nodes = nodes;
  roadmapEdit.set({ ...original });
});

export const addNodeNew = triggerChunkRerenderDecorator(
  (parentId: string, type: NodeIdentifierTypes) => {
    const newId = getUnusedNodeId();
    const { x, y } = getNodeCoords(parentId);
    // sets parent and children properly
    generationFlow(type, parentId, newId, 'newNode', x, y + 200);
    // addConnection(parentId, newId);
    return newId;
  }
);
export const changeNodeInfo = triggerRerenderDecorator(
  <T extends keyof NodeInfoStore>(
    id: string,
    property: T,
    value: NodeInfoStore[T]
  ) => {
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
);

export const changeResourceSubNode = <T extends keyof ResourceSubNodeStore>(
  id: string,
  property: T,
  value: ResourceSubNodeStore[T]
) => {
  const original = roadmapEdit.get();
  const { resources } = original;
  resources[id][property] = value;
  original.resources = resources;
  manualTrigger(resources[id].parentId);
  roadmapEdit.set({ ...original });
};

export const toggleEditing = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: !original.editing });
});

export const setEditingTrue = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: true });
});

export const setEditingFalse = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: false });
});
