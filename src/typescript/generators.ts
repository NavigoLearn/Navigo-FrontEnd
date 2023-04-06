import { AboutTab, IssuesTab, InfoTab } from '@type/roadmap/tab';
import {
  NodeStore,
  ResourceStore,
  ResourceSubNodeStore,
} from '@type/roadmap/nodes';

export function generateAbout(
  name: string,
  author: string,
  description: string
): AboutTab {
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
): IssuesTab {
  return {
    id,
    title,
    author,
  };
}

export function generateInfoTab(
  id: string,
  title: string,
  done: boolean,
  description: string,
  links: { title: string; link: string }[],
  roadmap: { id: string; title: string },
  additionalInfo: string
): InfoTab {
  return {
    id,
    title,
    done,
    description,
    links,
    roadmap,
    additionalInfo,
  };
}

export function generateNode(
  id: string,
  title: string,
  tabId: string,
  x: number,
  y: number
): NodeStore {
  return {
    id,
    title,
    type: 'Node',
    tabId,
    x,
    y,
  };
}

export function generateResource(
  id: string,
  title: string,
  x: number,
  y: number,
  nodes: string[]
): ResourceStore {
  return {
    id,
    title,
    type: 'Resource',
    nodes,
    x,
    y,
  };
}

export function generateResSubNode(
  id: string,
  title: string,
  tabId: string
): ResourceSubNodeStore {
  return {
    id,
    title,
    type: 'ResourceSubNode',
    tabId,
  };
}
