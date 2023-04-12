import { atom } from 'nanostores';
import roadmapEdit from '@store/roadmap_edit';
import { ConnectionStore } from '@type/roadmap/connections';
import { HashMap } from '@type/roadmap/roadmap';

const selection = atom({
  selectedNodeId: '',
  adjacentConnectionsId: [],
} as any);

export function setSelection(id: string) {
  // gets adjacent connections id from the roadmap_static
  const adjacentConnectionsId: HashMap<ConnectionStore> =
    roadmapEdit.get().connections;

  // iterates all keys and selects connections with id mathcing either parent or child
  const selectedConnectionsId: string[] = [];
  Object.keys(adjacentConnectionsId).forEach((key) => {
    if (
      adjacentConnectionsId[key].parentId === id ||
      adjacentConnectionsId[key].childId === id
    ) {
      selectedConnectionsId.push(key);
    }
  });

  selection.set({
    selectedNodeId: id,
    adjacentConnectionsId: selectedConnectionsId,
  });
}

export function clearSelection() {
  selection.set({
    selectedNodeId: '',
    adjacentConnectionsId: [],
  });
}

export default selection;
