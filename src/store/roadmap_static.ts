import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';
import { triggerChunkRerender } from '@store/runtime/renderedChunks';
import { setLoadedTrue } from '@type/roadmap/utils';
import { fetchRoadmap } from '../api/roadmap/roadmaps';

const roadmapStatic = atom({
  chunkSize: 400,
} as Roadmap);

export function getNodeById(id: string) {
  const original = roadmapStatic.get();
  return original.nodes[id];
}

export function setRoadmapFromAPI(pageId: string) {
  fetchRoadmap(pageId).then((roadmap: Roadmap) => {
    roadmapStatic.set(roadmap);
    setLoadedTrue();
    triggerChunkRerender();
  });
}
export default roadmapStatic;
