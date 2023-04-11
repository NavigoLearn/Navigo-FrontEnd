import { atom } from 'nanostores';
import { renderNodesIds } from '@typescript/roadmap-render';
import roadmapEdit from '@store/roadmap_edit';
import roadmap from '@store/roadmap';
import roadmapState from '@store/roadmap_state';

const chunksStore = atom({
  chunks: [],
} as {
  chunks: string[]; // the id of the currently rendered chunks
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

  renderNodesIds(editing ? roadmapEdit : roadmap, nodesArray);
}

export default chunksStore;
