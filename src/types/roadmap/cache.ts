import { HashMap } from '@type/roadmap/roadmap';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';

// the cache will keep the original value of the tabs, if the values are modified in edit it will apply the diffs
export type cachedTabs = {
  info: HashMap<TabInfo>;
  about: TabAbout;
  issues: HashMap<TabIssue>;
};
