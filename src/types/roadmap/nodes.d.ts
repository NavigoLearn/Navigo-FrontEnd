export interface NodeProps {
  title: string;
  type: 'Node' | 'resourceSubNode';
  tabId: string;
}

export interface NodeStore {
  id: string;
  title: string;
  nodeType: 'Node';
  tabId: string;
  x: number;
  y: number;
}

export interface ResourceStore {
  id: string;
  title: string;
  nodeType: 'Resource';
  x: number;
  y: number;
  nodes: string[];
}

export interface ResourceSubNodeStore {
  id: string;
  title: string;
  nodeType: string;
  tabId: string;
}

export interface ResourceProps {
  title: string;
  nodes: NodeProps[];
}

export type NodeComponents = {
  Node: NodeProps;
  Resource: ResourceProps;
};

export type NodeKeys = keyof NodeComponents;

export type NodeManagerProps<T extends NodeKeys> = {
  nodeType: T;
  sizeCb: (width: number, height: number) => void;
} & NodeComponents[T];
