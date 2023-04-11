import { atom } from 'nanostores';

const renderNodesStore = atom({
  nodes: [], // ids of all the chunks currently visible on the screen
} as {
  nodes: string[];
});

export function checkDiff(newNodes: string[]) {
  // checks if the ids are identical even if the order is different

  const oldNodes = renderNodesStore.get().nodes;
  if (oldNodes.length !== newNodes.length) return true;
  for (let i = 0; i < oldNodes.length; i += 1) {
    if (!newNodes.includes(oldNodes[i])) return true;
  }
  return false;
}
export function setNodes(newNodes: string[]) {
  if (checkDiff(newNodes)) {
    console.log('replaced nodesiwth new ones');
    renderNodesStore.set({ nodes: newNodes });
  } else {
    console.log('didnt replace nodes because they are the same');
  }
}

export function getNodes() {
  return renderNodesStore.get().nodes;
}

export default renderNodesStore;
