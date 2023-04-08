type Link = {
  title: string;
  link: string;
};

type RoadmapPreview = {
  title: string;
  id: string;
};

export type InfoTab = {
  id: string;
  title: string;
  done: boolean;
  description: string;
  links: Link[];
  roadmap: RoadmapPreview;
  additionalInfo: string;
};

export type AboutTab = {
  name: string;
  author: string;
  description: string;
};

export type IssuesTab = {
  id: string;
  title: string;
  author: string;
};

type TabManager = {
  info: InfoTab;
  about: AboutTab;
  issues: IssuesTab;
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
