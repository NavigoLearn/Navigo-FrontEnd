import { NodeStore, ResourceStore, ResourceSubNodeStore } from './nodes';
import { InfoTab, IssuesTab, AboutTab } from './tab';

interface HashMap<T> {
  [key: string]: T;
}
export type Roadmap = {
  about: AboutTab;
  issues: HashMap<IssuesTab>;
  data: HashMap<InfoTab>;
  nodes: HashMap<NodeStore | ResourceStore>;
  resourceSubNodes: HashMap<ResourceSubNodeStore>;
};
