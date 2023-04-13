import { atom } from 'nanostores';
import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import { triggerRerenderAllDecorator } from '@typescript/roadmap/roadmap-edit-decorators';

const state = atom({
  editing: false, // used to determine if the user is editing the roadmap
  save: true, // and if the editing state should be saved or not
} as {
  editing: boolean;
  save: boolean;
});

export default state;

export const toggleEditing = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: !original.editing });
});

export const setEditingTrue = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: true });
});

export const setEditingFalse = triggerRerenderAllDecorator(() => {
  const original = state.get();
  state.set({ ...original, editing: false });
});

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
  roadmapEdit.set({ ...roadmapStatic.get() });
}

export function transferEditToRoadmap() {
  roadmapStatic.set({ ...roadmapEdit.get() });
}

export function startEditingProtocol() {
  // copies roadmap_static to editing roadmap_static and sets editing to true
  transferRoadmapToEdit();
  setEditingTrue();
}

export function saveEditingProtocol() {
  // TODO makes a popup to ask the user if he wants to save the changes
}

export function saveEditing() {
  // TODO save the changes to the normal roadmap_static and send it to the server
}
