import { HashMap } from '@type/roadmap/roadmap';
import {
  TabAbout,
  TabInfo,
  TabInfoApi,
  TabInfoApiSendFormat,
  TabIssue,
} from '@type/roadmap/tab-manager';
import {
  generateIssue,
  generateTabAbout,
  generateTabInfo,
} from '@typescript/roadmap/generators';
import roadmapState from '@store/roadmap/data/roadmap_state';
import { networkLatency } from './params';

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

export const fetchTabAbout = async (id: string) => {
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

export const fetchTabInfoPseudo = async (id: string) => {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      resolve(data[id]);
    }, networkLatency);
  });
};

export const fetchTabIssuePseudo = async (id: string) => {
  return new Promise<TabIssue>((resolve) => {
    setTimeout(() => {
      resolve(issues[id]);
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

export const postTabInfoPseudo = async (id: string, newData: TabInfo) => {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      data[id] = newData;
      resolve(data[id]);
    }, networkLatency);
  });
};

export const postTabIssue = async (id: string, newData: TabIssue) => {
  return new Promise<TabIssue>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      issues[id] = newData;
      resolve(issues[id]);
    }, networkLatency);
  });
};

export function postTabAboutProp<T extends keyof TabAbout>(
  roadmapId: string,
  prop: T,
  value: TabAbout[T]
) {
  return new Promise<TabAbout>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      aboutTab[roadmapId][prop] = value;
      resolve(aboutTab[roadmapId]);
    }, networkLatency);
  });
}

export async function fetchTabInfoData(id: string) {
  // uses fetch to get data from the server
  const roadmapId = roadmapState.get().id;
  const response = await fetch(`/api/roadmaps/${roadmapId}/tabsInfo/${id}`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json());
  const { tabInfo } = response;
  const decoded = JSON.parse(atob(tabInfo.content));
  return decoded;
}

export async function updateTabInfoData(id: string, tabData: TabInfo) {
  // uses fetch to post data on the server
  const roadmapId = roadmapState.get().id;
  // creates the API object
  const apiTabData: TabInfoApi = {
    stringId: tabData.id, // the id of the tab that is shared with the node
    roadmapId, // the id of the roadmap that is shared with the node
    // encoded json base64
    content: btoa(JSON.stringify(tabData)),
  };
  const sentData: TabInfoApiSendFormat = {
    tabInfo: apiTabData,
  };
  const response = await fetch(`/api/roadmaps/${roadmapId}/tabsInfo/${id}`, {
    method: 'POST',
    body: JSON.stringify(sentData),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res);

  console.log(response);

  return response.json();
}
export async function createTabInfoData(id: string, tabData: TabInfo) {
  // uses fetch to post data on the server
  const roadmapId = roadmapState.get().id;
  // creates the API object
  const apiTabData: TabInfoApi = {
    stringId: tabData.id, // the id of the tab that is shared with the node
    roadmapId, // the id of the roadmap that is shared with the node
    // encoded json base64
    content: btoa(JSON.stringify(tabData)),
  };
  const sentData: TabInfoApiSendFormat = {
    tabInfo: apiTabData,
  };

  const response = await fetch(`/api/roadmaps/${roadmapId}/tabsInfo/create`, {
    method: 'POST',
    body: JSON.stringify(sentData),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res);
  return response.json();
}
export function postTabInfoPropPseudo<T extends keyof TabInfo>(
  id: string,
  prop: T,
  value: TabInfo[T]
) {
  return new Promise<TabInfo>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      if (data[id] === undefined) {
        postTabInfoPseudo(
          id,
          generateTabInfo(
            id,
            'tabinfo',
            false,
            'descrip',
            [],
            'additional info'
          )
        ).then(() => {
          data[id][prop] = value;
          resolve(data[id]);
        });
      } else {
        data[id][prop] = value;
        resolve(data[id]);
      }
    }, networkLatency);
  });
}

export function postTabIssueProp<T extends keyof TabIssue>(
  id: string,
  prop: T,
  value: TabIssue[T]
) {
  return new Promise<TabIssue>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      issues[id][prop] = value;
      resolve(issues[id]);
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

export const fetchIssueCommentsPseudo = async (id: string) => {
  return new Promise<Comment[]>((resolve) => {
    setTimeout(() => {
      // change data at id with data
      resolve([]);
    }, networkLatency);
  });
};
