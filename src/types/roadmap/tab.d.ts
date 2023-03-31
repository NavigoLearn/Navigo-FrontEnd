type Link = {
  title: string;
  link: string;
};

type RoadmapPreview = {
  title: string;
  id: string;
};

export type InfoTab = {
  title: string;
  done: boolean;
  description: string;
  links: Link[];
  roadmap: RoadmapPreview;
  additionalInfo: string;
};

type AboutTab = {
  name: string;
  author: string;
  description: string;
};

type IssuesTab = {
  issues: string[]; // issue ids
};

type TabManager = {
  info: infoTab;
  about: aboutTab;
  issues: issuesTab;
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
