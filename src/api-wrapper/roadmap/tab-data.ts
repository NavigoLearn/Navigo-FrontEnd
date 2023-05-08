import { HashMap } from '@type/roadmap/roadmap';
import {
  TabAbout,
  TabInfo,
  TabInfoApi,
  TabInfoApiSendFormat,
  TabIssue,
} from '@type/roadmap/tab-manager';
import { generateTabInfo } from '@typescript/roadmap/generators';
import roadmapState from '@store/roadmap/data/roadmap_state';

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

export const fetchTabAbout = async (roadmapId: string) => {
  const response = await fetch(`/roadmaps/${roadmapId}/mini`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  const responseData = await response.json();
  return responseData;
};

export const fetchRoadmapMiniById = async (id: string) => {
  // fetches roadmapData from api
  const response = await fetch(`/api/roadmaps/${id}/mini`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
  return response;
};

export const fetchPostTabAboutTitle = async (
  roadmapId: string,
  title: string
) => {
  const response = await fetch(`/api/roadmaps/${roadmapId}/title`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  const responseData = await response.json();
  return responseData;
};

export const fetchPostTabAboutDescription = async (
  roadmapId: string,
  description: string
) => {
  const response = await fetch(`/api/roadmaps/${roadmapId}/description`, {
    method: 'POST',
    body: JSON.stringify({ description }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res);
  const responseData = await response.json();

  return responseData;
};
