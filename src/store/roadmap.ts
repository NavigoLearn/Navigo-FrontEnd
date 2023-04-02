import { Roadmap, About, Issue } from '@type/roadmap/roadmap';
import {
  NodeStore,
  ResourceStore,
  ResourceSubNodeStore,
} from '@type/roadmap/nodes';
import { atom } from 'nanostores';
import { InfoTab } from '@type/roadmap/tab';

function generateAbout(
  name: string,
  author: string,
  description: string
): About {
  return {
    name,
    author,
    description,
  };
}

function generateIssue(id: string, title: string, author: string): Issue {
  return {
    id,
    title,
    author,
  };
}

function generateTab(
  title: string,
  done: boolean,
  description: string,
  links: { title: string; link: string }[],
  roadmap: { id: string; title: string },
  additionalInfo: string
): InfoTab {
  return {
    title,
    done,
    description,
    links,
    roadmap,
    additionalInfo,
  };
}

function generateNode(
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

function generateResource(
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

function generateResSubNode(
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

const roadmap = atom({
  about: generateAbout('', '', ''),
  issues: [
    generateIssue('id1Issue', 'Issue 1', 'Author 1'),
    generateIssue('id2Issue', 'Issue 2', 'Author 2'),
    generateIssue('id3Issue', 'Issue 3', 'Author 3'),
  ],

  data: {
    // the basic nodes data
    tabid0: generateTab(
      'ESLint',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      { id: '42124', title: 'Eslint roadmap' },
      'this is some lorem ipsum addition info'
    ),
  },

  nodes: [
    // list of all nodes
    generateNode('1', 'Node1', 'tabid0', 100, 100),
    generateResource('2', 'Resource1', 300, 300, ['res1node1', 'res1node2']),
  ],
  resourceSubNodes: {
    // list of all resource nodes
    res1node1: generateResSubNode('res1node1', 'Resource Node 1', 'tabid0'),
    res1node2: generateResSubNode('res1node2', 'Resource Node 2', 'tabid0'),
  },
} as Roadmap);

export default roadmap;
