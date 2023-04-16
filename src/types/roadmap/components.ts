import React from 'react';

export type EditingComponentProps = {
  id: string;
  onSave?: () => void;
  onCancel?: () => void;
  parentId?: string;
};

export type NonEditingComponentProps = {
  id: string;
  setCb: () => void;
};

export type PossibleTypes = string | number;
export type WrappedComponentProps<T> = {
  onChange: (value: T) => void;
  value: T;
};

export function checkPossibleTypes(value: any): value is PossibleTypes {
  return typeof value === 'string' || typeof value === 'number';
}

export type HOCProps<T> = {
  originalValue: T;
  onChange: (value: T) => void;
};

export type StateManagerProps<T> = React.FC<WrappedComponentProps<T>>;
