import { atom } from 'nanostores';

const roadmapState = atom({
  editing: false, // used to determine if the userDisplay is editing the roadmap
  save: true, // and if the editing state should be saved or not
  loaded: false, // used to determine if the roadmap has been loaded
  isCreate: false, // used to determine if the roadmap is being created
  id: '', // the id of the roadmap
  userId: '',
} as {
  editing: boolean;
  save: boolean;
  loaded: boolean;
  isCreate: boolean;
  id: string;
  userId: string;
});

export default roadmapState;

export function setSaveTrue() {
  const original = roadmapState.get();
  roadmapState.set({ ...original, save: true });
}

export function setEditingTrueNoRerender() {
  const original = roadmapState.get();
  original.editing = true;
  roadmapState.set(original);
}

export function setRoadmapId(id: string) {
  const original = roadmapState.get();
  roadmapState.set({ ...original, id });
}

export function getRoadmapId() {
  const original = roadmapState.get();
  return original.id;
}

export function setSaveFalse() {
  const original = roadmapState.get();
  roadmapState.set({ ...original, save: false });
}

export function toggleSave() {
  const original = roadmapState.get();
  roadmapState.set({ ...original, save: !original.save });
}

export function setIsCreateTrue() {
  const original = roadmapState.get();
  roadmapState.set({ ...original, isCreate: true });
}

export function getIsCreate() {
  const original = roadmapState.get();
  return original.isCreate;
}
