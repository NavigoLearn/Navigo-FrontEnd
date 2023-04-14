import {
  triggerRerenderDecorator,
  triggerChunkRecalculationDecorator,
  triggerChunkRerenderDecorator,
} from '@typescript/roadmap/roadmap-edit-decorators';
import { NodeIdentifierTypes } from '@type/roadmap/nodes';
import roadmapEdit from '@store/roadmap_edit';
import {
  isNodeInfoProps,
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
  getNodeCoords,
  getUnusedNodeId,
} from '@typescript/roadmap/roadmap-edit-logic';

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
