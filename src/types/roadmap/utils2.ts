import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import { setEditingTrue } from '@store/roadmap_state';
import { applyAllDiffs } from '@store/runtime/diff-tabs';

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
  transferEditToRoadmap();
  applyAllDiffs();
}
