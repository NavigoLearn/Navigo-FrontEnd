type ErrorTypes =
  | 'RootRemove'
  | 'RootChangeLevel'
  | 'RootChangeType'
  | 'SecondaryParentChangeLevel'
  | 'MainChildChangeLevel'
  | 'DoubleMainChangeLevel'
  | 'UnallowedNodeTypeChange';

const errorMapping = {
  RootRemove: 'Root node cannot be removed, please remove its children instead',
  RootChangeLevel: 'Root node level cannot be changed',
  RootChangeType: 'Root node type cannot be changed',
  SecondaryParentChangeLevel: 'A main node must have a main node as a parent',
  MainChildChangeLevel:
    'Changing this node level would result in a main node with a secondary as a parent',
  DoubleMainChangeLevel: 'Changing this node would result in 2 main paths',
  UnallowedNodeTypeChange:
    'Changing this node type would result in an invalid tree',
};
export default class ErrorHandler extends Error {
  type: ErrorTypes;

  constructor(type: ErrorTypes) {
    const message = errorMapping[type];
    super(message);
    this.type = type;
  }
}
