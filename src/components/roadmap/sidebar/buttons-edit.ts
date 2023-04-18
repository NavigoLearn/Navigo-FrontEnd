import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import {
  cancelEditingProtocol,
  saveEditingProtocol,
} from '@type/roadmap/utils2';
import { toggleEditing } from '@typescript/roadmap/roadmap-edit-logic-decorated';

const buttonsEdit = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Save',
    clickHandler: () => {
      saveEditingProtocol();
    },
  },
  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      cancelEditingProtocol();
    },
  },
];

export default buttonsEdit;
