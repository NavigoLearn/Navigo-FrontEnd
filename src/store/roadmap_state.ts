import { atom } from 'nanostores';
import { triggerRerenderAllDecorator } from '@typescript/roadmap/roadmap-edit-decorators';

const state = atom({
  editing: false, // used to determine if the user is editing the roadmap
  save: true, // and if the editing state should be saved or not
  loaded: false, // used to determine if the roadmap has been loaded
} as {
  editing: boolean;
  save: boolean;
  loaded: boolean;
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
