import { atom } from 'nanostores';
import { TabAbout } from '@type/roadmap/tab-manager';
import { deepCopy } from '@typescript/roadmap/utils';
import { RoadmapTypeApi } from '@type/explore/card';
import { setClickedIndex } from '@store/roadmap/sidebar/clickedState';
import { fetchGetMiniProfileDataById } from '../../../api-wrapper/user/user';

const tabManagerStore = atom({
  // holds the currently displayed tabs and is also used for editing tabs and issues
  // that are then sent to the backend
  type: 'about',
  open: false,
  about: {
    // the data for the about tab
    name: '',
    author: '',
    description: '',
  },
  issues: {
    // the data for the issues tab
    issues: [],
  },
  info: {
    // the data for the currently displayed info node
    id: '',
    title: '',
    done: false,
    description: '',
    links: [],
    additionalInfo: '',
  },
} as any);

export function falseOpen() {
  const newTab = tabManagerStore.get();
  newTab.open = false;
  console.log('false open');
  setClickedIndex(-1);
  tabManagerStore.set({
    ...newTab,
    open: newTab.open,
  });
}

export function trueOpen() {
  const newTab = tabManagerStore.get();
  newTab.open = true;
  tabManagerStore.set({
    ...newTab,
    open: newTab.open,
  });
}
export function flipOpen() {
  const newTab = tabManagerStore.get();
  if (newTab.open === false) {
    trueOpen();
  } else {
    falseOpen();
  }
}

export function changeInfoTabProp(property: string, value: string) {
  const newTab = tabManagerStore.get();
  newTab.info[property] = value;
  tabManagerStore.set({
    ...newTab,
  });
}

export function changeAboutTabProp(property: string, value: string) {
  const newTab = tabManagerStore.get();
  newTab.about[property] = value;
  tabManagerStore.set({
    ...newTab,
  });
}

export function getAboutTab() {
  return tabManagerStore.get().about;
}

export function setInfo(infoData) {
  const newTab = tabManagerStore.get();
  if (
    newTab.type === 'info' &&
    newTab.open &&
    newTab.info.description === infoData.description
  ) {
    falseOpen();
    return;
  }
  trueOpen();
  const newInfoData = deepCopy(infoData);
  tabManagerStore.set({
    ...newTab,
    type: 'info',
    info: { ...newInfoData },
  });
}

export function changeInfoTabLink(index: number, field: string, value: string) {
  const newTab = tabManagerStore.get();
  newTab.info.links[index][field] = value;
  tabManagerStore.set({
    ...newTab,
  });
}

export function deleteInfoTabLink(index: number) {
  const newTab = tabManagerStore.get();
  newTab.info.links.splice(index, 1);
  tabManagerStore.set({
    ...newTab,
  });
}

export function addInfoTabLink({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const newTab = tabManagerStore.get();
  newTab.info.links.push({
    title,
    link,
  });
  tabManagerStore.set({
    ...newTab,
  });
}

export function setAboutInfoOnly(tab: TabAbout) {
  const newTab = tabManagerStore.get();
  tabManagerStore.set({
    ...newTab,
    about: { ...tab },
  });
}
export function setAboutTabData(tab: TabAbout) {
  const newTab = tabManagerStore.get();
  tabManagerStore.set({
    ...newTab,
    about: { ...tab },
    type: 'about',
  });
}

export function setAbout() {
  const newTab = tabManagerStore.get();
  if (newTab.type === 'about' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    type: 'about',
  });
}

export function setIssues() {
  const newTab = tabManagerStore.get();

  if (newTab.type === 'issues' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    type: 'issues',
  });
}

export function setThread(issueId: string) {
  const newTab = tabManagerStore.get();
  if (newTab.type === 'thread' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    type: 'thread',
    issueId,
  });
}

export function setBook() {
  const newTab = tabManagerStore.get();
  if (newTab.type === 'book' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    type: 'book',
  });
}

export function setAddIssue() {
  const newTab = tabManagerStore.get();
  if (newTab.type === 'addIssue' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    type: 'addIssue',
  });
}

export default tabManagerStore;
