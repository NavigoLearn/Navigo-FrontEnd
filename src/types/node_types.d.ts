export declare interface NodeProps {
<<<<<<< HEAD
  title: string;
=======
  title?: string;
>>>>>>> 4c8a47c7f21ab53b1f27376bd7e3b9e89d103add
  level?: number;
  bgColor?: string;
  resourceCb?: () => void;
}

export declare interface ResourceProps {
  title?: string;
  bgColor?: string;
  nodes?: NodeProps[];
}

<<<<<<< HEAD
export declare interface NodeManagerProps<T> {
  nodeType: T;
=======
export declare interface NodeManagerProps extends NodeProps, ResourceProps {
  nodeType: string;
>>>>>>> 4c8a47c7f21ab53b1f27376bd7e3b9e89d103add
  sizeCb: (width: number, height: number) => void;
}
