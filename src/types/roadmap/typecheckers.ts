import {
  NodeProps,
  ResourceProps,
  NodeIdentifierTypes,
  ResourceSubNodeStore,
  ResourceSubNodeProps,
  ResourceStore,
} from './nodes';

export function isNodeProps(props: any): props is NodeProps {
  return 'title' in props && 'tabId' in props && 'type' in props;
}

export function isResourceSubNodeProps(
  props: any
): props is ResourceSubNodeProps {
  return 'title' in props && 'tabId' in props && 'type' in props;
}

export function isResourceProps(props: any): props is ResourceProps {
  return 'title' in props && 'nodes' in props;
}

export function isResourceStore(props: any): props is ResourceStore {
  return (
    'title' in props &&
    'type' in props &&
    props.type === 'Resource' &&
    'nodes' in props &&
    'x' in props &&
    'y' in props &&
    'id' in props
  );
}

export function isValidNodeType(type: string): type is NodeIdentifierTypes {
  return type === 'Node' || type === 'Resource';
}
