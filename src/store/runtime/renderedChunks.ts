import { atom } from 'nanostores';
import { setNodes } from '@store/runtime/renderedNodes';
import roadmapEdit from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import roadmap from '@store/roadmap';

const chunksStore = atom({
  chunks: [], // ids of all the chunks currently visible on the screen
  chunkSize: 400,
  chunkRerenderTrigger: () => {
    // function for rerendering chunks
  },
} as {
  chunks: string[];
  chunkSize: number;
  chunkRerenderTrigger: () => void;
});

export function setChunks(newChunks: string[]) {
  const original = chunksStore.get();
  chunksStore.set({
    ...original,
    chunks: newChunks,
  });
}

export function setChunkRerenderTrigger(newTrigger: () => void) {
  const original = chunksStore.get();
  chunksStore.set({
    ...original,
    chunkRerenderTrigger: newTrigger,
  });
}

export function triggerChunkRerender() {
  const original = chunksStore.get();
  original.chunkRerenderTrigger();
}

export function setChunkSize(newChunkSize: number) {
  const original = chunksStore.get();
  chunksStore.set({ ...original, chunkSize: newChunkSize });
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
