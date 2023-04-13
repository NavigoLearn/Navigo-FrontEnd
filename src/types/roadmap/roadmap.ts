import { ConnectionStore } from '@type/roadmap/connections';
import { NodeTypesStore } from '@type/roadmap/nodes';
import { ResourcesStoreTypes } from '@type/roadmap/resources';
import { TabAbout, TabInfo, TabIssues } from '@type/roadmap/tab';

export interface HashMap<T> {
  [key: string]: T;
}
export type Roadmap = {
  about: TabAbout;
  issues: HashMap<TabIssues>;
  data: HashMap<TabInfo>;
  nodes: HashMap<NodeTypesStore>;
  connections: HashMap<ConnectionStore>;
  resources: HashMap<ResourcesStoreTypes>;
  triggers: any;
  chunks: HashMap<string[]>; // ids of the nodes in each chunk
  chunkSize: number;
};
