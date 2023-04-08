import { NodeProps, ResourceProps, NodeIdentifierTypes } from './nodes';

export function isNodeProps(props: any): props is NodeProps {
  return (
    !!(props as NodeProps).title &&
    !!(props as NodeProps).tabId &&
    !!(props as NodeProps).type
  );
}

export function isResourceProps(props: any): props is ResourceProps {
  return !!(props as ResourceProps).title && !!(props as ResourceProps).nodes;
}

export function isValidNodeType(type: string): type is NodeIdentifierTypes {
  return type === 'Node' || type === 'Resource';
}
