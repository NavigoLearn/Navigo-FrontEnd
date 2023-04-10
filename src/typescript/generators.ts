import { TabInfo, TabAbout, TabIssues } from '@type/roadmap/tab';
import { NodeResourceStore, NodeInfoStore } from '@type/roadmap/nodes';
import { ResourceSubNodeStore } from '@type/roadmap/resources';

export function generateTabAbout(
  name: string,
  author: string,
  description: string
): TabAbout {
  return {
    name,
    author,
    description,
  };
}

export function generateIssue(
  id: string,
  title: string,
  author: string
): TabIssues {
  return {
    id,
    title,
    author,
  };
}

export function generateTabInfo(
  id: string,
  title: string,
  done: boolean,
  description: string,
  links: { title: string; link: string }[],
  additionalInfo: string
): TabInfo {
  return {
    id,
    title,
    done,
    description,
    links,
    additionalInfo,
  };
}

export function generateNodeInfo(
  id: string,
  title: string,
  tabId: string,
  x: number,
  y: number
): NodeInfoStore {
  return {
    id,
    title,
    type: 'Info',
    tabId,
    x,
    y,
  };
}

export function generateNodeResource(
  id: string,
  title: string,
  x: number,
  y: number,
  nodes: string[]
): NodeResourceStore {
  return {
    id,
    title,
    type: 'Resource',
    nodes,
    x,
    y,
  };
}

export function generateNodeResourceEmpty(
  id: string,
  title: string,
  x: number,
  y: number
): NodeResourceStore {
  return {
    id,
    title,
    type: 'Resource',
    nodes: [],
    x,
    y,
  };
}

export function generateResourceSubNodeEmpty(
  id: string,
  parentId: string,
  title: string,
  tabId: string
): ResourceSubNodeStore {
  return {
    parentId,
    id,
    title,
    type: 'ResourceSubNode',
    tabId,
  };
}

export function generateNodeInfoEmpty(
  id: string,
  title: string,
  x: number,
  y: number
): NodeInfoStore {
  return {
    id,
    title,
    type: 'Info',
    tabId: '',
    x,
    y,
  };
}

export function generateResourceSubNode(
  id: string,
  parentId: string,
  title: string,
  tabId: string
): ResourceSubNodeStore {
  return {
    parentId,
    id,
    title,
    type: 'ResourceSubNode',
    tabId,
  };
}

export function generateConnection(
  id: string,
  parentId: string,
  childId: string
) {
  return {
    id,
    parentId,
    childId,
  };
}
