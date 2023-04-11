import { atom } from 'nanostores';
import { renderNodesIds } from '@typescript/roadmap-render';
import { setNodes, getNodes } from '@store/render';
import roadmapEdit from '@store/roadmap_edit';
import roadmap from '@store/roadmap';
import roadmapState from '@store/roadmap_state';

const chunksStore = atom({
  chunks: [], // ids of all the chunks currently visible on the screen
} as {
  chunks: string[];
});

export function setChunks(newChunks: string[]) {
  chunksStore.set({ chunks: newChunks });
}

export function renderChunks() {
  const { editing } = roadmapState.get();
  let chunks: any;
  if (editing) chunks = roadmapEdit.get().chunks;
  else chunks = roadmap.get().chunks;

  const chunksIds = chunksStore.get().chunks;

  const nodesArray: string[] = [];
  chunksIds.forEach((chunkId) => {
    // gets the array of nodes for each chunk id
    const nodes = chunks[chunkId];
    if (nodes !== undefined) {
      nodesArray.push(...nodes);
    }
  });
  // calls the render function on the given ids
  // console.log('rendering nodes', nodesArray);

  // first way to render nodes
  // renderNodesIds(editing ? roadmapEdit : roadmap, nodesArray);

  // second way to render nodes
  // console.log('rendering nodes', nodesArray);
  setNodes(nodesArray);
}

export default chunksStore;
