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
  }
  // remove the old unused nodes from the roadmap
  // for (let i = 0; i < oldNodes.length; i += 1) {
  //   if (!newNodes.includes(oldNodes[i])) {
  //     // removes the old nodes 1 by 1 so roadmap has time to render
  //     setTimeout(() => {
  //       // removes the old node from the current store
  //       renderNodesStore.set({
  //         nodes: [...oldNodes.slice(0, i), ...oldNodes.slice(i + 1)],
  //       });
  //       console.log('chagend soter remove');
  //     }, 10);
  //   }
  // }
  console.log('finished adding new nodes');
}

export async function addFromQueueToNodes(nodesToAdd: string[]) {
  setTimeout(() => {
    // adds the nodes from the queue to the nodes array
    const newNode = nodesToAdd[0];
    const remaining = nodesToAdd.slice(1);
    // adds newNode to the current store
    renderNodesStore.set({
      nodes: [...renderNodesStore.get().nodes, newNode],
    });
    removeFirstFromAddQueue();
    if (remaining.length > 0) {
      addFromQueueToNodes(remaining);
    }
  }, 100);
}

export function setNodes(newNodes: string[]) {
  if (checkDiff(newNodes)) {
    // addNewNodesInQueue(newNodes);
    // addFromQueueToNodes(renderNodeQueues.get().nodesToAdd);
    renderNodesStore.set({ nodes: newNodes });
  }
}

export function getNodes() {
  return renderNodesStore.get().nodes;
}

export default renderNodesStore;
