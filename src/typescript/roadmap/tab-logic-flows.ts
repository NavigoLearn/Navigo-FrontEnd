import {
  cacheTabInfo,
  changeChachedTabInfoProp,
  checkCachedTabInfo,
} from '@store/runtime/cached-tabs';
import { TabInfo } from '@type/roadmap/tab-manager';
import {
  postTabInfo,
  fetchTabInfo,
  postTabInfoProp,
} from '../../api/roadmap/tab-data';

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
  // returns the value of the tab
  return tabInfo;
};

export const changeTabInfoFlow = async (id: string, newData: TabInfo) => {
  // saves to cache and to the api
  // TODO optimize this to only save to the api if the value is different
  cacheTabInfo(id, newData);
  postTabInfo(id, newData);
};

export const changeTabInfoPropFlow = async <T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) => {
  // we assume that the tab is already in the cache since it must have been opened before
  // change in cache
  changeChachedTabInfoProp(id, prop, value);
  // change in api
  postTabInfoProp(id, prop, value);
};
