import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { setConfirmCancel, setConfirmSave } from '@store/roadmap/popup';
import book from '@assets/book.svg';
import { setBook } from '@store/roadmap/display/tab-manager';
import { dispatchAnalyticsEvent } from '@store/misc/analytics';

const buttonsEdit = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Save',
    clickHandler: () => {
      setConfirmSave();

      dispatchAnalyticsEvent('roadmapInteraction', {
        actionType: 'Save Roadmap',
      });
    },
  },
  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      setConfirmCancel();
      dispatchAnalyticsEvent('roadmapInteraction', {
        actionType: 'Cancel Save Roadmap',
      });
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
