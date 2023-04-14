import { getNodes } from '@store/runtime/renderedNodes';
import { getTriggersAll } from '@store/runtime/rerenderTriggers';
import { calculateChunkId } from '@typescript/roadmap/generators';
import {
  removeChunkNode,
  addChunkNode,
  getNodeCoords,
} from '@typescript/roadmap/roadmap-edit-logic';
import { triggerChunkRerender } from '@store/runtime/renderedChunks';

type TriggerFunction<T extends any[]> = (id: string, ...args: T) => void;
type TriggerFunctionNoId<T extends any[]> = (...args: T) => void;

export function triggerRerenderDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    // gets all rendered nodes
    func(id, ...args);
    // the args should have id
    const triggers = getTriggersAll();
    // reRenders only a specific node
    const trigger = triggers[id];
    if (trigger) trigger();
    else throw new Error('no trigger found');
  };
}

export function triggerRerenderAllDecorator<T extends any[]>(
  func: TriggerFunctionNoId<T>
): TriggerFunctionNoId<T> {
  return (...args: T) => {
    // gets all rendered nodes
    func(...args);
    const nodesId = getNodes();
    const triggers = getTriggersAll();
    // reRenders all nodes
    nodesId.forEach((nodeId) => {
      const trigger = triggers[nodeId];
      if (trigger) trigger();
      else throw new Error('no trigger found');
    });
  };
}

export function triggerChunkRecalculationDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    func(id, ...args);
    // recalculates the chunks for a specific node
    removeChunkNode(id);
    const { x, y } = getNodeCoords(id);
    const chunkId = calculateChunkId(x, y);
    addChunkNode(id, chunkId); // adds node to chunks and sets the corresponding chunk to the node
  };
}

export function triggerChunkRerenderDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    func(id, ...args);
    // triggers a recalculation of chunks
    triggerChunkRerender();
  };
}
