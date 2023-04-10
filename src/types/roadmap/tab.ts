type Link = {
  title: string;
  link: string;
};

export type TabInfo = {
  id: string;
  title: string;
  done: boolean;
  description: string;
  links: Link[];
  additionalInfo: string;
};

export type TabAbout = {
  name: string;
  author: string;
  description: string;
};

export type TabIssues = {
  id: string;
  title: string;
  author: string;
};

type TabManager = {
  info: TabInfo;
  about: TabAbout;
  issues: TabIssues;
};

export type TabKeys = keyof TabManager;

export type Tab<T extends TabKeys> = {
  type: T;
} & TabManager[T];

export type TabProps = {
  type: string;
  open: boolean;
  about: Tab<'about'>;
  info: Tab<'info'>;
  issues: Tab<'issues'>;
};
