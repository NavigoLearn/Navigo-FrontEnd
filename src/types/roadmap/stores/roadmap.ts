import { NodeClass } from '@typescript/roadmap_ref/node/core/core';

export interface HashMap<T> {
  [key: string]: T;
}
export type Roadmap = {
  nodes: HashMap<NodeClass>;
  connections: HashMap<any>; // needs to be created
  chunks: HashMap<string[]>; // ids of the nodes in each chunk
};