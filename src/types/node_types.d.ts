export declare interface NodeProps {
  title: string;
  level?: number;
  bgColor?: string;
  resourceCb?: () => void;
}

export declare interface ResourceProps {
  title?: string;
  bgColor?: string;
  nodes?: NodeProps[];
}

export declare interface NodeManagerProps<T> {
  nodeType: T;
  sizeCb: (width: number, height: number) => void;
}
