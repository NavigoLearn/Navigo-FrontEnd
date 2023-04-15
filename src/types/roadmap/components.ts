import React from 'react';

export type EditingComponentProps<T> = {
  id: string;
  value: T;
  onChange: (value: T) => void;
  onSave: () => void;
  onCancel: () => void;
};

export type NonEditingComponentProps<T> = {
  value: T;
  id: string;
  setCb: () => void;
};

export type StateManagerProps<T> = {
  value: T;
  EditingComponent: React.FC<EditingComponentProps<T>>;
  NonEditingComponent: React.FC<NonEditingComponentProps<T>>;
  persistDataSave: (value: T) => void;
};
