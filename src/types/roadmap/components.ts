export type EditingComponentProps = {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export type NonEditingComponentProps = {
  value: string;
  id: string;
  setCb: () => void;
};
