import { atom } from 'nanostores';
import { cachedTabs } from '@type/roadmap/cache';
import { TabInfo } from '@type/roadmap/tab-manager';

const diffStore = atom({
  // this is a store keeping track of the changes made to the tabs while editing
  info: {},
  about: {},
  issues: {},
} as cachedTabs);

export const diffTabInfo = (id: string, tab: TabInfo) => {
  const original = diffStore.get();
  diffStore.set({ ...original, info: { ...original.info, [id]: tab } });
};

export const diffTabInfoProp = <T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) => {
  const original = diffStore.get();
  diffStore.set({
    ...original,
    info: { ...original.info, [id]: { ...original.info[id], [prop]: value } },
  });
};

export const applyDiffInfo = (tab: TabInfo) => {
  // applies the diffs to the tab and returns the new tab
  const original = diffStore.get();
  const diff = original.info[tab.id];
  let diffTab = tab;
  if (diff) {
    diffTab = { ...tab, ...diff };
  }
  return diffTab;
};
export default diffStore;
