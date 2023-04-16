import {
  triggerRerenderDecorator,
  triggerChunkRecalculationDecorator,
  triggerChunkRerenderDecorator,
  manualTrigger,
  triggerRerenderAllDecorator,
  triggerAddConnectionDecorator,
  triggerPositionCacheClearDecorator,
  triggerChunkRemovalOfNodeDecorator,
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
  addNodeInfoEmpty,
  addNodeResourceEmpty,
  generateNewTab,
  generateResourceSubNodeNew,
  getUnusedNodeId,
} from '@typescript/roadmap/roadmap-edit-logic';
import { ResourceSubNodeStore } from '@type/roadmap/resources';
import state from '@store/roadmap_state';
import { getNodeCoords } from '@typescript/roadmap/roadmap-render';

export const changeNodeCoords = triggerPositionCacheClearDecorator(
  triggerRerenderDecorator(
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
  )
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

export const generationFlow = triggerAddConnectionDecorator(
  (
    parentId: string,
    id: string,
    type: NodeIdentifierTypes,
    title: string,
    x: number,
    y: number
  ) => {
    if (type === 'Resource') {
      return addNodeResourceEmpty(parentId, id, title, x, y);
    }
    if (type === 'Info') {
      return addNodeInfoEmpty(parentId, id, title, x, y);
    }
    throw new Error('Invalid type');
  }
);

export const addNodeNew = triggerChunkRerenderDecorator(
  (parentId: string, type: NodeIdentifierTypes) => {
    const newId = getUnusedNodeId();
    const { x, y } = getNodeCoords(parentId);
    // sets parent and children properly
    generationFlow(parentId, newId, type, 'newNode', x, y + 200);
    // addConnection(parentId, newId);
    return newId;
  }
);

export const changeNodeGeneral = triggerRerenderDecorator(
  triggerPositionCacheClearDecorator((id: string, value: any) => {
    // used for changing arbitrary fields in nodes when editing (not x and y)
    const original = roadmapEdit.get();
    const { nodes } = original;
    const node = nodes[id];

    if (!isNodeTypesStore(node)) {
      throw new Error('No node found for given id');
    }
    nodes[id] = { ...node, ...value };
    original.nodes = nodes;
    roadmapEdit.set({ ...original });
  })
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

export const removeNode = triggerChunkRerenderDecorator(
  triggerChunkRemovalOfNodeDecorator(
    triggerPositionCacheClearDecorator((id: string) => {
      const original = roadmapEdit.get();
      const { nodes } = original;
      const node = nodes[id];
      if (!isNodeTypesStore(node)) {
        throw new Error('No node found for given id');
      }
      // remove from parent
      if (node.parent === 'root') throw new Error('Cannot remove root node');

      const parent = nodes[node.parent];
      if (!isNodeTypesStore(parent)) {
        throw new Error('No parent found for given id');
      }
      parent.children = parent.children.filter((child) => child !== id);
      // remove from children
      node.children.forEach((child) => {
        const childNode = nodes[child];
        if (!isNodeTypesStore(childNode)) {
          throw new Error('No child found for given id');
        }
        childNode.parent = node.parent;
        nodes[child] = childNode;
      });

      // remove from nodes
      // remove from connections
      const { connections } = original;

      const nodeConnections = node.connections;
      nodeConnections.forEach((connId) => {
        // replaces the connection end with the parent node
        const connection = connections[connId];
        if (
          connection.parentId === node.parent ||
          connection.childId === node.parent
        ) {
          // delete connection from parent
          nodes[node.parent].connections = nodes[
            node.parent
          ].connections.filter((conn) => conn !== connId);
          delete connections[connId];
        } else {
          // redirects connection from node to parent of the node
          if (connection.parentId === id) {
            connection.parentId = node.parent;
          } else if (connection.childId === id) {
            connection.childId = node.parent;
          } else {
            throw new Error('Connection does not contain node');
          }
          connections[connId] = connection;
        }
      });

      nodes[node.parent] = parent;
      delete nodes[id];

      original.connections = connections;
      original.nodes = nodes;
      roadmapEdit.set({ ...original });
    })
  )
);

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