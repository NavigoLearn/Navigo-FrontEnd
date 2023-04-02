export interface NodeProps {
  title: string;
  type: 'Node' | 'ResourceSubNode';
  tabId: string;
}

export interface NodeStore {
  id: string;
  title: string;
  type: 'Node';
  tabId: string;
  x: number;
  y: number;
}

export interface ResourceStore {
  id: string;
  title: string;
  type: 'Resource';
  x: number;
  y: number;
  nodes: string[];
}

export interface ResourceSubNodeStore {
  id: string;
  type: 'ResourceSubNode';
  title: string;
  tabId: string;
}

export interface ResourceProps {
  title: string;
  nodes: NodeProps[];
}

// export type NodeComponents = {
//   Node: NodeProps;
//   Resource: ResourceProps;
// };

// export type NodeKeys = keyof NodeComponents;

// export type NodeManagerProps<T extends NodeTypes> = {
//   nodeType: T;
//   sizeCb: (width: number, height: number) => void;
// } & T;

export type NodeTypes = NodeProps | ResourceProps;

export type ManagerProps = {
  data: NodeTypes;
  sizeCb: (width: number, height: number) => void;
};
