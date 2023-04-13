import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/roadmap';

const roadmapEdit = atom({
  chunkSize: 400,
} as Roadmap);
export default roadmapEdit;
