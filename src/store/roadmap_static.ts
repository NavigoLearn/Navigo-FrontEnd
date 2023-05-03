import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';
import { triggerChunkRerender } from '@store/runtime-roadmap/renderedChunks';
import { setLoadedTrue } from '@typescript/roadmap/utils';
import miscParams from '@store/runtime-roadmap/miscParams';
import { RoadmapTypeApi } from '@type/explore/card';
import { isRoadmapType } from '@type/roadmap/typecheckers';
import { setRoadmap } from '@typescript/roadmap/roadmap-edit-logic';
import { generateInitialEditCreate } from '@store/roadmap_edit';
import { fetchRoadmap } from '../api-wrapper/roadmap/roadmaps';

const roadmapStatic = atom({} as Roadmap);

export function getNodeById(id: string) {
  const original = roadmapStatic.get();
  return original.nodes[id];
}

export function setRoadmapFromAPI(pageId: string) {
  fetchRoadmap(pageId).then((roadmapData: RoadmapTypeApi) => {
    if (isRoadmapType(roadmapData.data)) {
      const roadmap: Roadmap = roadmapData.data;
      roadmapStatic.set(roadmap);
      setLoadedTrue();
      triggerChunkRerender();
      miscParams.get().recenterRoadmap();
    } else {
      throw new Error('Roadmap data is not of type Roadmap');
    }
  });
}

export function initialRoadmapCreateRender() {
  setRoadmap(generateInitialEditCreate());
  setLoadedTrue();
  triggerChunkRerender();
  miscParams.get().recenterRoadmap();
}

export default roadmapStatic;
