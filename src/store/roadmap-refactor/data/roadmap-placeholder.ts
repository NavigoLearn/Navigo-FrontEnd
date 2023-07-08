import { atom } from 'nanostores';
import { Roadmap } from '@type/roadmap/stores/roadmap';

const roadmapPlaceholder = atom({
  nodes: {}, // the nodes json will contain only the nodes currently in editing mode
  // if you want to get the node just search it by id
  connections: {},
  chunks: {},
} as Roadmap);