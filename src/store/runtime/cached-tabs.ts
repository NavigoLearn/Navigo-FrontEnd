import { atom } from 'nanostores';
import { cachedTabs } from '@type/roadmap/cache';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';

const cachedTabs = atom({
  info: {},
  about: {},
  issues: {},
} as cachedTabs);

export const cacheTabInfo = (id: string, tab: TabInfo) => {
  const original = cachedTabs.get();
  cachedTabs.set({ ...original, info: { ...original.info, [id]: tab } });
};

export const cacheTabAbout = (id: string, tab: TabAbout) => {
  const original = cachedTabs.get();
  cachedTabs.set({ ...original, about: tab });
};

export const cacheTabIssues = (id: string, tab: TabIssue) => {
  const original = cachedTabs.get();
  cachedTabs.set({ ...original, issues: { ...original.issues, [id]: tab } });
};

export const getCachedTabInfo = (id: string) => {
  const original = cachedTabs.get();
  return original.info[id];
};
export const checkCachedTabInfo = (id: string) => {
  const original = cachedTabs.get();
  return original.info[id];
};

export const checkCachedTabAbout = (id: string) => {
  const original = cachedTabs.get();
  return original.about[id];
};

export const checkCachedTabIssues = (id: string) => {
  const original = cachedTabs.get();
  return original.issues[id];
};

export const changeCachedTab = (id: string, tab: TabInfo) => {
  const original = cachedTabs.get();
  cachedTabs.set({ ...original, [id]: tab });
};

export const changeChachedTabInfoProp = <T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) => {
  const original = cachedTabs.get();
  cachedTabs.set({
    ...original,
    info: { ...original.info, [id]: { ...original.info[id], [prop]: value } },
  });
};

export default cachedTabs;
