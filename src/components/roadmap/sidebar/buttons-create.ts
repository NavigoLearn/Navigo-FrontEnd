import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { getRoadmapId } from '@store/roadmap_state';
import about from '@assets/about.svg';
import { setTabAboutFlow } from '@typescript/roadmap/tab-logic-flows';

const buttonsCreate = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Create',
    clickHandler: () => {
      // sending the roadmap to be created
      console.log('created roadmap');
    },
  },

  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      // canceling the roadmap creation and redirect to explore
      console.log('cenceled and redirect to profile');
    },
  },

  {
    id: 3,
    cIcon: about,
    title: 'About',
    clickHandler: () => {
      setTabAboutFlow(getRoadmapId());
    },
  },
];

export default buttonsCreate;
