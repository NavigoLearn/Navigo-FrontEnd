import { getNodes } from '@store/runtime/renderedNodes';
import {
  getNodeCoords,
  renderConnections,
} from '@typescript/roadmap/roadmap-render';
import { getTriggersRenderAll } from '@store/runtime/rerenderTriggers';
import { calculateChunkId } from '@typescript/roadmap/generators';
import {
  removeChunkNode,
  addChunkNode,
  addConnection,
} from '@typescript/roadmap/roadmap-edit-logic';
import { triggerChunkRerender } from '@store/runtime/renderedChunks';
import {
  emptyCachedNodeCoord,
  emptyCachedNodeCoordAll,
} from '@store/runtime/cached-node-coords';
import { addNewError } from '@store/runtime/error-list';

type TriggerFunction<T extends any[]> = (id: string, ...args: T) => any;
type TriggerFunctionNoId<T extends any[]> = (...args: T) => any;
type TriggerFunctionWithParent<T extends any[]> = (
  parentId: string,
  id: string,
  ...args: T
) => void;

export function triggerAddConnectionDecorator<T extends any[]>(
  func: TriggerFunctionWithParent<T>
): TriggerFunctionWithParent<T> {
  return (parentId: string, id: string, ...args: T) => {
    func(parentId, id, ...args);
    addConnection(parentId, id);
  };
}

export function triggerPositionCacheClearDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    func(id, ...args);
    emptyCachedNodeCoord(id);
  };
}

export function manualTrigger(id: string) {
  const triggers = getTriggersRenderAll();
  const trigger = triggers[id];
  if (trigger) trigger();
  else throw new Error('no trigger found');
}

export function triggerRerenderDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    // gets all rendered nodes
    func(id, ...args);
    // the args should have id
    const triggers = getTriggersRenderAll();
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
    const triggers = getTriggersRenderAll();
    // empties the node cache for all nodes since editing switched
    emptyCachedNodeCoordAll();
    // reRenders all nodes
    nodesId.forEach((nodeId) => {
      const trigger = triggers[nodeId];
      if (trigger) trigger();
      else throw new Error('no trigger found');
    });
    return 'ok';
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

export function triggerChunkRemovalOfNodeDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    func(id, ...args);
    removeChunkNode(id);
    // recalculates the chunks for a specific node
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

export function triggerConnectionsForcedRerenderDecorator<T extends any[]>(
  func: TriggerFunction<T>
): TriggerFunction<T> {
  return (id: string, ...args: T) => {
    func(id, ...args);
    renderConnections(); // forcefully rerenders connections even if the store hasn't changed
  };
}

export function handleErrorsDecorator<T extends any[]>(
  func: TriggerFunctionNoId<T>
): TriggerFunctionNoId<T> {
  return (...args: T): string => {
    try {
      func(...args);
      return 'ok';
    } catch (e) {
      addNewError(e.message);
      return 'err';
    }
  };
}
