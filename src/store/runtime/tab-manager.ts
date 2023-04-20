import { atom } from 'nanostores';
import { TabAbout } from '@type/roadmap/tab-manager';
import { deepCopy } from '@typescript/roadmap/utils';

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

export function flipOpen() {
  const newTab = tabManagerStore.get();
  newTab.open = !newTab.open;
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

export function falseOpen() {
  const newTab = tabManagerStore.get();
  newTab.open = false;
  tabManagerStore.set({
    ...newTab,
    open: newTab.open,
  });
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
export function setAbout(tab: TabAbout) {
  const newTab = tabManagerStore.get();
  if (newTab.type === 'about' && newTab.open) {
    falseOpen();
    return;
  }
  trueOpen();
  tabManagerStore.set({
    ...newTab,
    about: { ...tab },
    type: 'about',
  });
}
export function setTabAboutProp(property: string, value: string) {
  const newTab = tabManagerStore.get();
  newTab.about[property] = value;
  console.log(property, value, 'value field');
  tabManagerStore.set({
    ...newTab,
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

export default tabManagerStore;
