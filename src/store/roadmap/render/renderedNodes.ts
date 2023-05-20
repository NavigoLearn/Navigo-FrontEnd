import { atom } from 'nanostores';

const renderNodesStore = atom({
  nodes: [], // ids of all the nodes currently rendered on the screen
} as {
  nodes: string[];
});

const renderNodeQueues = atom({
  nodesToRemove: [], // ids of all the nodes that should be removed from the screen
  nodesToAdd: [], // ids of all the nodes that should be added to the screen
} as {
  nodesToRemove: string[];
  nodesToAdd: string[];
});

const runner = atom({
  nodesAddRunning: false,
  nodesRemoveRunning: false,
} as {
  nodesAddRunning: boolean;
  nodesRemoveRunning: boolean;
});

export function checkDiff(newNodes: string[]) {
  // checks if the ids are identical even if the order is different

  const { nodes } = renderNodesStore.get();
  const { nodesToAdd } = renderNodeQueues.get();
  for (let i = 0; i < newNodes.length; i += 1) {
    if (!nodes.includes(newNodes[i]) && !nodesToAdd.includes(newNodes[i]))
      return true;
  }
  return false;
}

export function placeInRemoveQueue(nodeId: string) {
  const original = renderNodeQueues.get();
  renderNodeQueues.set({
    ...original,
    nodesToRemove: [...original.nodesToRemove, nodeId],
  });
}

export function placeInAddQueue(nodeId: string) {
  const original = renderNodeQueues.get();
  renderNodeQueues.set({
    ...original,
    nodesToAdd: [...original.nodesToAdd, nodeId],
  });
}

export function removeFirstFromAddQueue() {
  const original = renderNodeQueues.get();
  const { nodesToAdd } = original;
  const remaining = nodesToAdd.slice(1);
  renderNodeQueues.set({ ...original, nodesToAdd: remaining });
}

export function removeFirstFromRemoveQueue() {
  const original = renderNodeQueues.get();
  const { nodesToRemove } = original;
  const remaining = nodesToRemove.slice(1);
  renderNodeQueues.set({ ...original, nodesToRemove: remaining });
}

export function addNewNodesInQueue(newNodes: string[]) {
  for (let i = 0; i < newNodes.length; i += 1) {
    const { nodes } = renderNodesStore.get();
    const { nodesToAdd } = renderNodeQueues.get();
    if (!nodes.includes(newNodes[i]) && !nodesToAdd.includes(newNodes[i])) {
      console.log('added node', i);
      placeInAddQueue(newNodes[i]);
    }
    if (nodes.includes(newNodes[i]) && !nodesToAdd.includes(newNodes[i])) {
      console.log('removed node', i);
      placeInRemoveQueue(newNodes[i]);
    }
  }
}

export async function removeFromQueueToNodes(nodesToRemove: string[]) {
  setTimeout(() => {
    // removes the nodes from the queue to the nodes array
    const newNode = nodesToRemove[0];
    const remaining = nodesToRemove.slice(1);
    // removes newNode from the current store
    renderNodesStore.set({
      nodes: renderNodesStore.get().nodes.filter((node) => node !== newNode),
    });
    removeFirstFromRemoveQueue();
    if (remaining.length > 0) {
      removeFromQueueToNodes(remaining);
    } else {
      runner.set({
        ...runner.get(),
        nodesRemoveRunning: false,
      });
    }
  }, 10);
}
export async function addFromQueueToNodes() {
  setTimeout(() => {
    // adds the nodes from the queue to the nodes array
    const { nodesToAdd } = renderNodeQueues.get();
    const newNode = nodesToAdd[0];
    const remaining = nodesToAdd.slice(1);
    // adds newNode to the current store
    renderNodesStore.set({
      nodes: [...renderNodesStore.get().nodes, newNode],
    });
    removeFirstFromAddQueue();
    if (remaining.length > 0) {
      addFromQueueToNodes();
    } else {
      runner.set({ ...runner.get(), nodesAddRunning: false });
    }
  }, 10);
}

export function asyncRendering(newNodes: string[]) {
  // not finished
  addNewNodesInQueue(newNodes);
  if (!runner.get().nodesAddRunning)
    addFromQueueToNodes(renderNodeQueues.get().nodesToAdd);

  // removeFromQueueToNodes(renderNodeQueues.get().nodesToRemove);
}

export function setNodes(newNodes: string[]) {
  if (checkDiff(newNodes)) {
    renderNodesStore.set({ nodes: newNodes });
  }
}

export function getNodes() {
  return renderNodesStore.get().nodes;
}

export default renderNodesStore;
