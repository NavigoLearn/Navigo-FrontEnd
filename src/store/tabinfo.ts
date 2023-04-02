import { atom } from 'nanostores';
import { TabProps } from '@type/roadmap/tab';

const tab = atom({
  type: 'about',
  open: false,
  about: {
    name: 'Nice roadmap',
    author: 'Nice author',
    description: 'very very nice description',
  },
  issues: {
    issues: [
      {
        id: 1,
        title: 'Add the useRef hook to the hooks resources',
        author: 'Eughen',
      },
      {
        id: 2,
        title: 'Issue 2',
        author: 'Author 2',
      },
      {
        id: 3,
        title: 'Issue 3',
        author: 'Author 3',
      },
    ],
  },
  info: {
    title: '',
    done: false,
    description: '',
    links: [],
    roadmap: {},
    additionalInfo: '',
  },
} as any);

export function flipOpen() {
  const newTab = tab.get();
  newTab.open = !newTab.open;
  tab.set({
    ...newTab,
    open: newTab.open,
  });
}

export function trueOpen() {
  const newTab = tab.get();
  newTab.open = true;
  tab.set({
    ...newTab,
    open: newTab.open,
  });
}

export function falseOpen() {
  const newTab = tab.get();
  newTab.open = false;
  tab.set({
    ...newTab,
    open: newTab.open,
  });
}

export function setInfo(infoData) {
  const newTab = tab.get();
  if (
    newTab.type === 'info' &&
    newTab.open &&
    newTab.info.description === infoData.description
  ) {
    falseOpen();
    return;
  }
  trueOpen();
  tab.set({
    ...newTab,
    type: 'info',
    info: infoData,
  });
}

export function setAbout() {
  const newTab = tab.get();
  if (newTab.type === 'about' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tab.set({
    ...newTab,
    type: 'about',
  });
}

export function setIssues() {
  const newTab = tab.get();

  if (newTab.type === 'issues' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tab.set({
    ...newTab,
    type: 'issues',
  });
}

export default tab;
