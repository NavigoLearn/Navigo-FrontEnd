import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { getRoadmapId, setRoadmapId } from '@store/roadmap/data/roadmap_state';
import about from '@assets/about.svg';
import { setTabAboutFlow } from '@typescript/roadmap/tab-logic-flows';
import roadmapEdit from '@store/roadmap/data/roadmap_edit';
import { createNewTabs } from '@store/roadmap/cache/diff-tabs';
import book from '@assets/book.svg';
import { setBook } from '@store/roadmap/display/tab-manager';
import { postRoadmapData } from '../../../api-wrapper/roadmap/roadmaps';

const buttonsCreate = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Create',
    clickHandler: () => {
      // sending the roadmap to be created
      postRoadmapData(roadmapEdit.get()).then((roadmapId) => {
        setRoadmapId(roadmapId.id);
        createNewTabs();
      });
      window.location.href = '/profile';
    },
  },

  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      // canceling the roadmap creation and redirect to explore
      window.location.href = '/explore';
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
