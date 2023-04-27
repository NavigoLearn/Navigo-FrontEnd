import {
  changeCachedTabIssueProp,
  cacheTabInfo,
  cacheTabIssues,
  changeCachedTabInfoProp,
  checkCachedTabInfo,
  checkCachedTabIssues,
  checkCachedTabAbout,
  cacheTabAbout,
  changeCachedTabAboutProp,
} from '@store/runtime/cached-tabs';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';
import { setAbout, setInfo } from '@store/runtime/tab-manager';
import {
  applyDiffInfoToTab,
  applyDiffIssueToTab,
} from '@store/runtime/diff-tabs';
import {
  postTabInfo,
  fetchTabInfo,
  postTabInfoProp,
  postTabIssue,
  postTabIssueProp,
  fetchTabIssue,
  fetchTabAbout,
  postTabAboutProp,
} from '../../api-wrapper/roadmap/tab-data';

export const getTabInfoFlow = async (id: string) => {
  // checks if is already in cache
  let tabInfo = checkCachedTabInfo(id);
  if (!tabInfo) {
    // if no it fetches the value from the server and saves it to the cache
    tabInfo = await fetchTabInfo(id).then((tab) => {
      cacheTabInfo(id, tab);
      return tab;
    });
  }
  tabInfo = applyDiffInfoToTab(tabInfo); // we apply the diff for editing purposes
  // returns the value of the tab
  return tabInfo;
};

export const getTabIssueFlow = async (id: string) => {
  // checks if is already in cache
  let tabIssue = checkCachedTabIssues(id);
  if (!tabIssue) {
    // if no it fetches the value from the server and saves it to the cache
    tabIssue = await fetchTabIssue(id).then((tab) => {
      cacheTabIssues(id, tab);
      return tab;
    });
  }
  tabIssue = applyDiffIssueToTab(tabIssue); // we apply the diff for editing purposes
  // returns the value of the tab
  return tabIssue;
};

export const changeTabInfoFlow = async (id: string, newData: TabInfo) => {
  // saves to cache and to the api-wrapper
  // TODO optimize this to only save to the api-wrapper if the value is different
  cacheTabInfo(id, newData);
  postTabInfo(id, newData);
};

export const changeTabIssueFlow = async (id: string, newData: TabIssue) => {
  // saves to cache and to the api-wrapper
  // TODO optimize this to only save to the api-wrapper if the value is different
  cacheTabIssues(id, newData);
  postTabIssue(id, newData);
};

export const changeTabIssuePropFlow = async <T extends keyof TabIssue>(
  id: string,

  prop: T,
  value: TabIssue[T]
) => {
  // we assume that the tab is already in the cache since it must have been opened before
  // change in cache
  changeCachedTabIssueProp(id, prop, value);
  // change in api-wrapper
  postTabIssueProp(id, prop, value);
};

export const changeTabInfoPropFlow = async <T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) => {
  // we assume that the tab is already in the cache since it must have been opened before
  // change in cache
  changeCachedTabInfoProp(id, prop, value);
  // change in api-wrapper
  postTabInfoProp(id, prop, value);
};

export const setInfoFlow = async (id: string) => {
  getTabInfoFlow(id).then((tab) => {
    setInfo(tab);
  });
};

export const checkjsonEmpty = (json: any) => {
  return Object.keys(json).length === 0;
};

export const getTabAboutFlow = async (roadmapId): Promise<TabAbout> => {
  let about = checkCachedTabAbout();
  if (!about || checkjsonEmpty(about)) {
    about = await fetchTabAbout('roadmap1').then((tab) => {
      cacheTabAbout(tab);
      return tab;
    });
  }
  return about;
};

export const postTabAboutPropFlow = async <T extends keyof TabAbout>(
  roadmapId: string,
  prop: T,
  value: TabAbout[T]
) => {
  postTabAboutProp(roadmapId, prop, value);
  changeCachedTabAboutProp(prop, value);
};

export const postTabAboutFlow = async (roadmapId: string) => {
  getTabAboutFlow(roadmapId).then((tab) => {
    setAbout(tab);
  });
};

export const setTabAboutFlow = async (roadmapId: string) => {
  getTabAboutFlow(roadmapId).then((tab) => {
    setAbout(tab);
  });
};
