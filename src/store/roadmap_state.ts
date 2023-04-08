import { atom } from 'nanostores';
import roadmapEdit from '@store/roadmap_edit';
import roadmap from '@store/roadmap';

const state = atom({
  editing: false,
  save: true,
} as any);
// TODO make types for the state

export default state;

export function toggleEditing() {
  const original = state.get();
  state.set({ ...original, editing: !original.editing });
}

export function setEditingTrue() {
  const original = state.get();
  state.set({ ...original, editing: true });
}

export function setEditingFalse() {
  const original = state.get();
  state.set({ ...original, editing: false });
}

export function setSaveTrue() {
  const original = state.get();
  state.set({ ...original, save: true });
}

export function setSaveFalse() {
  const original = state.get();
  state.set({ ...original, save: false });
}

export function toggleSave() {
  const original = state.get();
  state.set({ ...original, save: !original.save });
}

export function transferRoadmapToEdit() {
  roadmapEdit.set({ ...roadmap.get() });
}

export function transferEditToRoadmap() {
  roadmap.set({ ...roadmapEdit.get() });
}

export function startEditingProtocol() {
  // copies roadmap to editing roadmap and sets editing to true
  transferRoadmapToEdit();
  setEditingTrue();
}

export function saveEditingProtocol() {
  // TODO makes a popup to ask the user if he wants to save the changes
}

export function saveEditing() {
  // TODO save the changes to the normal roadmap and send it to the server
}
