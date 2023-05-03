import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { setConfirmCancel, setConfirmSave } from '@store/popup';
import book from '@assets/book.svg';
import { setBook } from '@store/runtime-roadmap/tab-manager';

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

  {
    id: 5,
    cIcon: book,
    title: 'Guide',
    clickHandler: () => {
      setBook();
    },
  },
];

export default buttonsEdit;
