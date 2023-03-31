import { NodeStore, ResourceSubNodeStore } from './nodes';
import { infoTab } from './tab';

interface HashMap<T> {
  [key: string]: T;
}

export type About = {
  name: string;
  author: string;
  description: string;
};

export type Issue = {
  id: string;
  title: string;
  author: string;
};

export type Roadmap = {
  about: About;
  issues: Issue[];
  data: HashMap<infoTab>;
  nodes: NodeStore[];
  resourceSubNodes: HashMap<ResourceSubNodeStore>;
};
