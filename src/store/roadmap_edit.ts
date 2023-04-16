import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';

const roadmapEdit = atom({
  chunkSize: 400,
} as Roadmap);

export function getNodeLevel(id: string) {
  const original = roadmapEdit.get();
  const { nodes } = original;
  return nodes[id].level;
}

export default roadmapEdit;
