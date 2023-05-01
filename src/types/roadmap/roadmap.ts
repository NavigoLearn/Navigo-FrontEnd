import { ConnectionStore } from '@type/roadmap/connections';
import { NodeTypesStore } from '@type/roadmap/nodes';
import { ResourcesStoreTypes } from '@type/roadmap/resources';
import { TabInfo } from '@type/roadmap/tab-manager';

export interface HashMap<T> {
  [key: string]: T;
}
export type Roadmap = {
  nodes: HashMap<NodeTypesStore>;
  connections: HashMap<ConnectionStore>;
  resources: HashMap<ResourcesStoreTypes>;
  chunks: HashMap<string[]>; // ids of the nodes in each chunk
  info: HashMap<TabInfo>;
};
