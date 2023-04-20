import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { setConfirmCancel, setConfirmSave } from '@store/popup';

const buttonsEdit = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Save',
    clickHandler: () => {
      setConfirmSave();
    },
  },
  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      setConfirmCancel();
    },
  },
];

export default buttonsEdit;
