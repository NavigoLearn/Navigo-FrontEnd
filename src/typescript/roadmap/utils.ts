import state from '@store/roadmap_state';
import miscParams from '@store/runtime-roadmap/miscParams';

export function setLoadedTrue() {
  const original = state.get();
  state.set({ ...original, loaded: true });
}
export function calculateChunkId(x, y) {
  const { chunkSize } = miscParams.get();
  return `${Math.floor(x / chunkSize)}_${Math.floor(y / chunkSize)}`;
}

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
