import { ResourceSubNodeProps } from '@type/roadmap/resources';

export type NodeIdentifierTypes = 'Info' | 'Resource';

export const nodeIdentifierTypesArray = ['Info', 'Resource'];
export interface NodeStore {
  id: string;
  title: string;
  type: NodeIdentifierTypes;
  x: number;
  y: number;
  parent: string;
  children: string[];
  chunk: string;
}
export interface NodeInfoProps {
  editing?: boolean;
  id: string;
  title: string;
  tabId: string;
}

export interface NodeResourceProps {
  id: string;
  title: string;
  nodes: ResourceSubNodeProps[];
}

export interface NodeInfoStore extends NodeStore {
  tabId: string;
}

export interface NodeResourceStore extends NodeStore {
  nodes: string[];
}

export type NodeTypesProps = NodeInfoProps | NodeResourceProps;
export type NodeTypesStore = NodeInfoStore | NodeResourceStore;

export type NodeManagerProps = {
  data: NodeTypesProps;
  sizeCb: (width: number, height: number) => void;
  renderTrigger: (callBack: any) => void;
};
