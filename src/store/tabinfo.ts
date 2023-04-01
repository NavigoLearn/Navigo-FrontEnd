import { atom } from 'nanostores';
import { TabProps } from '@type/roadmap/tab';

const tab = atom({
  type: 'about',
  open: false,
  about: {
    name: '',
    author: '',
    description: '',
  },
  issues: {
    issues: [],
  },
  info: {
    title: '',
    done: false,
    description: '',
    links: [],
    roadmaps: [],
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

export function setInfo(infoData) {
  const newTab = tab.get();
  flipOpen();
  tab.set({
    ...newTab,
    type: 'info',
    info: infoData,
  });
}

export function setAbout() {
  const newTab = tab.get();
  flipOpen();
  tab.set({
    ...newTab,
    type: 'about',
  });
}

export function setIssues() {
  const newTab = tab.get();
  flipOpen();
  tab.set({
    ...newTab,
    type: 'issues',
  });
}

export default tab;
