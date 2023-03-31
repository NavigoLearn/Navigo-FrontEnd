export interface NodeProps {
  title: string;
  type: 'Node' | 'resourceSubNode';
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
