import notick from '@assets/notick.svg';
import yestick from '@assets/yestick.svg';
import { getRoadmapId, setRoadmapId } from '@store/roadmap_state';
import about from '@assets/about.svg';
import { setTabAboutFlow } from '@typescript/roadmap/tab-logic-flows';
import roadmapEdit from '@store/roadmap_edit';
import { createNewTabs } from '@store/runtime-roadmap/diff-tabs';
import { postRoadmapData } from '../../../api-wrapper/roadmap/roadmaps';

const buttonsCreate = [
  {
    id: 1,
    cIcon: yestick,
    title: 'Create',
    clickHandler: () => {
      // sending the roadmap to be created
      console.log('created roadmap');
      postRoadmapData(roadmapEdit.get()).then((roadmapId) => {
        console.log(
          'posted roadmap, not posting tabs',
          roadmapId,
          roadmapId.id
        );
        setRoadmapId(roadmapId.id);
        createNewTabs();
      });
    },
  },

  {
    id: 2,
    cIcon: notick,
    title: 'Cancel',
    clickHandler: () => {
      // canceling the roadmap creation and redirect to explore
      console.log('cenceled and redirect to profile');
      window.location.href = '/explore';
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
