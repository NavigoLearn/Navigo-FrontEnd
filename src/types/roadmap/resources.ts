export type ResourcesStoreTypesIdentifiers = 'ResourceSubNode';

export interface ResourceSubNodeProps {
  id: string;
  parentId: string;
  type: 'ResourceSubNode';
  title: string;
  tabId: string;
}

export interface ResourceSubNodeStore {
  id: string;
  parentId: string;
  type: ResourcesStoreTypesIdentifiers;
  title: string;
  tabId: string;
}

export type ResourcesStoreTypes = ResourceSubNodeStore;
