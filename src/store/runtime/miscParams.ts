import { atom } from 'nanostores';
import { ReactComponentElement } from 'react';
import { manualTrigger } from '@typescript/roadmap/roadmap-edit-decorators';
import { getTriggerTooltip } from '@store/runtime/rerenderTriggers';

const miscParamsStore = atom({
  // holds misc params of the roadmap
  zoomAllowed: true,
  disableZoomTrigger: () => {
    // disables the zoom trigger
  },
  enableZoomTrigger: () => {
    // enables the zoom trigger
  },
  editingCount: 0,
  toolTip: {}, // functions that render react components with the desired functionality
} as {
  zoomAllowed: boolean;
  disableZoomTrigger: () => void;
  enableZoomTrigger: () => void;
  editingCount: number;
  toolTip: { [key: string]: any };
});

export function getEnableZoomTrigger() {
  return miscParamsStore.get().enableZoomTrigger;
}

export function getDisableZoomTrigger() {
  return miscParamsStore.get().disableZoomTrigger;
}

export function evaluateZoomAllowed() {
  const { zoomAllowed } = miscParamsStore.get();
  if (zoomAllowed) {
    getEnableZoomTrigger()();
  } else {
    getDisableZoomTrigger()();
  }
}
export function setEnableZoomTrigger(value: () => void) {
  const newStore = miscParamsStore.get();
  newStore.enableZoomTrigger = value;
  miscParamsStore.set({ ...newStore });
}

export function setDisableZoomTrigger(value: () => void) {
  const newStore = miscParamsStore.get();
  newStore.disableZoomTrigger = value;
  miscParamsStore.set({ ...newStore });
}

export function setZoomAllowed(value: boolean) {
  const newStore = miscParamsStore.get();
  newStore.zoomAllowed = value;
  miscParamsStore.set({ ...newStore });
  evaluateZoomAllowed();
}

export function increaseEditingCount() {
  const newStore = miscParamsStore.get();
  newStore.editingCount += 1;
  miscParamsStore.set({ ...newStore });
  evaluateZoomAllowed();
}

export function decreaseEditingCount() {
  const newStore = miscParamsStore.get();
  newStore.editingCount -= 1;
  miscParamsStore.set({ ...newStore });
  evaluateZoomAllowed();
}

export function useToolTip(nodeId: string) {
  const { toolTip } = miscParamsStore.get();
  return toolTip[nodeId];
}

export function setToolTip(nodeId: string, value: any) {
  const newStore = miscParamsStore.get();
  newStore.toolTip[nodeId] = value;
  // setting a new tooltip should also trigger a render
  miscParamsStore.set({ ...newStore });
  getTriggerTooltip(nodeId)();
}

export function resetAllTooltips() {
  const newStore = miscParamsStore.get();
  newStore.toolTip = {};
  miscParamsStore.set({ ...newStore });
}

export default miscParamsStore;
