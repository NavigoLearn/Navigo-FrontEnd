import { HashMap } from '@type/roadmap/roadmap';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';

export type cachedTabs = {
  info: HashMap<TabInfo>;
  about: TabAbout;
  issues: HashMap<TabIssue>;
};
