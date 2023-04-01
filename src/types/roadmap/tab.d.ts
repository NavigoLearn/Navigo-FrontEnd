type infoTab = {
  title: string;
  done: boolean;
  description: string;
  links: string[];
  roadmap?: string[];
  additionalInfo?: string;
};

type aboutTab = {
  name: string;
  author: string;
  description: string;
};

type issuesTab = {
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
