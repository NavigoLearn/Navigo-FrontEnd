import { getNodes } from '@store/runtime/renderedNodes';
import { getTriggersAll } from '@store/runtime/rerenderTriggers';
import {
  addChunkNode,
  getNodeCoords,
  removeChunkNode,
} from '@store/roadmap_edit';
import { triggerChunkRerender } from '@store/runtime/renderedChunks';
import { calculateChunkId } from '@typescript/generators';

export function triggerRerenderDecorator(func: (id: string, ...args) => void) {
  return function (id: string, ...args) {
    // gets all rendered nodes
    func(id, ...args);
    // args should have an id
    const triggers = getTriggersAll();
    // rerenders only a specific node
    const trigger = triggers[id];
    if (trigger) trigger();
    else throw new Error('no trigger found');
  };
}
export function triggerRerenderAllDecorator(func: (...args) => void) {
  return function (...args) {
    // gets all rendered nodes
    func(...args);
    const nodesIds = getNodes();
    const triggers = getTriggersAll();
    // rerenders all nodes
    nodesIds.forEach((nodeId) => {
      const trigger = triggers[nodeId];
      if (trigger) trigger();
      else throw new Error('no trigger found');
    });
  };
}

export function triggerChunkRecalculationDecorator(
  func: (id: string, ...args) => void
) {
  return function (id: string, ...args) {
    // gets all rendered nodes
    func(id, ...args);
    // gets the current chunk
    // chunk recalculation trigger only in edit roadmap mode
    removeChunkNode(id);
    const { x, y } = getNodeCoords(id);
    const chunkId = calculateChunkId(x, y);
    addChunkNode(id, chunkId); // adds  node to chunks and sets the corresponding chunk to the node
  };
}

export function triggerChunkRerenderDecorator(
  func: (id: string, ...args) => void
) {
  return function (id: string, ...args) {
    func(id, ...args);
    // triggers a recalculation of chunks
    triggerChunkRerender();
  };
}
