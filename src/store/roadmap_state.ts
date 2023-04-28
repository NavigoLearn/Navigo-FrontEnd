import { atom } from 'nanostores';

const state = atom({
  editing: false, // used to determine if the user is editing the roadmap
  save: true, // and if the editing state should be saved or not
  loaded: false, // used to determine if the roadmap has been loaded
  id: '', // the id of the roadmap
} as {
  editing: boolean;
  save: boolean;
  loaded: boolean;
  id: string;
});

export default state;

export function setSaveTrue() {
  const original = state.get();
  state.set({ ...original, save: true });
}

export function setEditingTrueNoRerender() {
  const original = state.get();
  original.editing = true;
  state.set(original);
}

export function setRoadmapId(id: string) {
  const original = state.get();
  state.set({ ...original, id });
}

export function getRoadmapId() {
  const original = state.get();
  return original.id;
}

export function setSaveFalse() {
  const original = state.get();
  state.set({ ...original, save: false });
}

export function toggleSave() {
  const original = state.get();
  state.set({ ...original, save: !original.save });
}
