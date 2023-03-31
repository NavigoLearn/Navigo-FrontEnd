import edit from '@assets/edit.svg';
import issues from '@assets/issues.svg';
import help from '@assets/help.svg';
import report from '@assets/report.svg';

const buttons = [
  {
    id: 1,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: edit,
    title: 'Edit',
    clickHandler: () => {
      console.log('edit');
    },
  },
  {
    id: 2,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: issues,
    title: 'Issues',
    clickHandler: () => {
      console.log('issues');
    },
  },
  {
    id: 3,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: help,
    title: 'Help',
    clickHandler: () => {
      console.log('help');
    },
  },
  {
    id: 4,
    cName:
      'w-10 flex justify-self-center items-center text-center text-2xl hover:underline',
    cIcon: report,
    title: 'Report',
    clickHandler: () => {
      console.log('report');
    },
  },
];

export default buttons;
