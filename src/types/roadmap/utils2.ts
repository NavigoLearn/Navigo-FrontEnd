import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import { setEditingTrue } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { applyAllDiffs } from '@store/runtime/diff-tabs';
import { deepCopy } from '@type/roadmap/utils';

export function transferRoadmapToEdit() {
  const deepCopyRoadmap = deepCopy(roadmapStatic.get());
  roadmapEdit.set({ ...deepCopyRoadmap });
}

export function transferEditToRoadmap() {
  const deepCopyRoadmap = deepCopy(roadmapEdit.get());
  roadmapStatic.set({ ...deepCopyRoadmap });
}
export function startEditingProtocol() {
  // copies roadmap_static to editing roadmap_static and sets editing to true
  transferRoadmapToEdit();
  setEditingTrue();
}

export function saveEditingProtocol() {
  transferEditToRoadmap(); //  transfers the changes to the static roadmap
  applyAllDiffs(); // apply all difs to the modified tab
  // here there should be a request to the server with the new saved roadmap
}
