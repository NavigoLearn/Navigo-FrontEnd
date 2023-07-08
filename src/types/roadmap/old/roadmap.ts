import { ConnectionStore } from '@type/roadmap/old/connections';
import { NodeTypesStore } from '@type/roadmap/old/nodes';
import { ResourcesStoreTypes } from '@type/roadmap/old/resources';
import { TabInfo } from '@type/roadmap/old/tab-manager';

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
