export interface NodeProps {
  title: string;
  width: number;
  height: number;
  bgColor: string;
  resourceCb: () => void;
}

export interface ResourceProps {
  title: string;
  bgColor: string;
  nodes: NodeProps[];
}

export type NodeComponents = {
  Node: NodeProps;
  Resource: ResourceProps;
};

export type NodeKeys = keyof NodeComponents;

type NodeManagerProps<T extends NodeKeys> = {
  nodeType: T;
  sizeCb: (width: number, height: number) => void;
} & NodeComponents[T];
