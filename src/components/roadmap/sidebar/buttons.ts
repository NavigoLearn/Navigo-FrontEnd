import edit from '@assets/edit.svg';
import issues from '@assets/issues.svg';
import about from '@assets/about.svg';
import report from '@assets/report.svg';
import { flipOpen, setAbout, setIssues } from '@store/tabinfo';
import { setReport } from '@store/popup';
import { startEditingProtocol, toggleEditing } from '@store/roadmap_state';

const buttons = [
  {
    id: 1,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: edit,
    title: 'Edit',
    clickHandler: () => {
      console.log('edit');
      // startEditingProtocol();
      toggleEditing();
    },
  },

  {
    id: 2,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: issues,
    title: 'Issues',
    clickHandler: () => {
      setIssues();
    },
  },

  {
    id: 3,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: about,
    title: 'About',
    clickHandler: () => {
      setAbout();
    },
  },

  {
    id: 4,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: report,
    title: 'Report',
    clickHandler: () => {
      setReport();
    },
  },
];

export default buttons;
