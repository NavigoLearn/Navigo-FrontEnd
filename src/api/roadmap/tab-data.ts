import { HashMap } from '@type/roadmap/roadmap';
import { TabAbout, TabInfo, TabIssue } from '@type/roadmap/tab-manager';
import {
  generateIssue,
  generateTabAbout,
  generateTabInfo,
} from '@typescript/roadmap/generators';

const aboutTab: HashMap<TabAbout> = {
  roadmap1: generateTabAbout(
    'Roadmap 1',
    'author 1 eughen',
    ' description roadmap1'
  ),
  roadmap2: generateTabAbout(
    'Roadmap 2',

    'author 2 eughen',
    ' description roadmap2'
  ),
};

const issues: HashMap<TabIssue> = {
  issue1: generateIssue('issue1', 'title1', 'author1'),
  issue2: generateIssue('issue2', 'title2', 'author2'),
  issue3: generateIssue('issue3', 'title3', 'author3'),
  issue4: generateIssue('issue4', 'title4', 'author4'),
  issue5: generateIssue('issue5', 'title5', 'author5'),
  issue6: generateIssue('issue6', 'title6', 'author6'),
  issue7: generateIssue('issue7', 'title7', 'author7'),
  issue8: generateIssue('issue8', 'title8', 'author8'),
};

const data: HashMap<TabInfo> = {
  tabid1: generateTabInfo(
    'tabid1',
    'tabinfo1',
    false,
    'descrip1 tabinfo',
    [
      {
        title: 'link1',
        link: 'https://www.google.com',
      },
      {
        title: 'link2',
        link: 'https://www.google.com',
      },
    ],
    'additional info 1'
  ),
  tabid2: generateTabInfo(
    'tabid2',
    'tabinfo2',
    false,
    'descrip2 tabinfo',
    [
      {
        title: 'link1',
        link: 'https://www.google.com',
      },
    ],
    'additional info 2'
  ),
};

const networkLatency = 100;

export const fetchAboutTab = async (id: string) => {
  return new Promise<TabAbout>((resolve) => {
    setTimeout(() => {
      resolve(aboutTab[id]);
    }, networkLatency);
  });
};

export const fetchIssues = async (id: string) => {
  return new Promise<TabIssue[]>((resolve) => {
    setTimeout(() => {
      resolve(Object.values(issues));
    }, networkLatency);
  });
};

export const fetchTabInfo = async (id: string) => {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      resolve(data[id]);
    }, networkLatency);
  });
};

export const changeTabInfo = async (id: string, newData: TabInfo) => {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      data[id] = newData;
      resolve(data[id]);
    }, networkLatency);
  });
};

export const changeAboutTab = async (id: string, newData: TabAbout) => {
  return new Promise<TabAbout>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      aboutTab[id] = newData;
      resolve(aboutTab[id]);
    }, networkLatency);
  });
};

export const changeIssue = async (id: string, newData: TabIssue) => {
  return new Promise<TabIssue>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      issues[id] = newData;
      resolve(issues[id]);
    }, networkLatency);
  });
};

export const postIssue = async (id: string, newData: TabIssue) => {
  return new Promise<TabIssue>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      issues[id] = newData;
      resolve(issues[id]);
    }, networkLatency);
  });
};

export const postTabInfo = async (id: string, newData: TabInfo) => {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      data[id] = newData;
      resolve(data[id]);
    }, networkLatency);
  });
};

export function postTabInfoProp<T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      data[id][prop] = value;
      resolve(data[id]);
    }, networkLatency);
  });
}

export const getNewTabId = async () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      resolve(`tabid${Object.keys(data).length + 1}`);
    }, networkLatency);
  });
};
