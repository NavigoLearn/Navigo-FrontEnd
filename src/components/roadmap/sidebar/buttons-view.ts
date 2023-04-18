import edit from '@assets/edit.svg';
import issues from '@assets/issues.svg';
import about from '@assets/about.svg';

import { setIssues } from '@store/runtime/tab-manager';
import { setReport } from '@store/popup';
import roadmapState, { getRoadmapId } from '@store/roadmap_state';
import {
  saveEditingProtocol,
  transferRoadmapToEdit,
} from '@type/roadmap/utils2';
import { toggleEditing } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { setTabAboutFlow } from '@typescript/roadmap/tab-logic-flows';

const buttonsView = [
  {
    id: 1,
    cIcon: edit,
    title: 'Edit',
    clickHandler: () => {
      // startEditingProtocol();
      // persist the changes to the original roadmap_static
      if (roadmapState.get().editing) {
        saveEditingProtocol();
      } else {
        transferRoadmapToEdit();
      }
      toggleEditing();
    },
  },

  {
    id: 2,
    cIcon: issues,
    title: 'Issues',
    clickHandler: () => {
      setIssues();
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

export default buttonsView;
