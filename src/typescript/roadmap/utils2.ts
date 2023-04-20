import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import {
  setEditingTrue,
  toggleEditing,
} from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { applyAllDiffs, emptyAllDiffs } from '@store/runtime/diff-tabs';
import { deepCopy } from '@typescript/roadmap/utils';
import { resetAllTooltips } from '@store/runtime/miscParams';
import {
  triggerChunkRecalculationDecorator,
  triggerChunkRerenderDecorator,
} from '@typescript/roadmap/roadmap-edit-decorators';
import { triggerChunkRerender } from '@store/runtime/renderedChunks';

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

export function cancelEditingProtocol() {
  // does not transfer changes from edit roadmap to real roadmap
  emptyAllDiffs(); // apply all difs to the modified tab
  resetAllTooltips(); // resets tooltips at the top of the nodes to null (they are not needed anymore)
  toggleEditing();
  triggerChunkRerender(); // we call it in order to have the correct node ids in the renderStore for nodes
}
export function saveEditingProtocol() {
  transferEditToRoadmap(); //  transfers the changes to the static roadmap
  applyAllDiffs(); // apply all difs to the modified tab
  resetAllTooltips(); // resets tooltips at the top of the nodes to null (they are not needed anymore)
  toggleEditing();
  triggerChunkRerender();
  // here there should be a request to the server with the new saved roadmap json
}

export function capStringLen(str: string, len: number) {
  if (str.length > len) {
    return `${str.slice(0, len)}`;
  }
  return str;
}
