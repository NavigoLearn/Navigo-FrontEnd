import state from '@store/roadmap_state';

export function setLoadedTrue() {
  const original = state.get();
  state.set({ ...original, loaded: true });
}
export const a = 1;

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
