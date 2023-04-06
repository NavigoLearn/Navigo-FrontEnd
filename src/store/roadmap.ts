import { atom } from 'nanostores';
import {
  generateAbout,
  generateIssue,
  generateResSubNode,
  generateInfoTab,
  generateResource,
  generateNode,
} from '@typescript/generators';
import { Roadmap } from '@type/roadmap/roadmap';

const roadmap = atom({
  about: generateAbout('', '', ''),
  issues: {
    id1Issue: generateIssue('id1Issue', 'Issue 1', 'Author 1'),
    id2Issue: generateIssue('id2Issue', 'Issue 2', 'Author 2'),
    id3Issue: generateIssue('id3Issue', 'Issue 3', 'Author 3'),
  },

  data: {
    // the basic nodes data
    tabid0: generateInfoTab(
      'tabid0',
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

    tabid1: generateInfoTab(
      'tabid1',
      'Some react roadmp1',
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
    tabid2: generateInfoTab(
      'tabid2',
      'Prettier node',
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

  nodes: {
    // list of all nodes
    idnode1: generateNode('idnode1', 'Node1', 'tabid0', 100, 100),
    idnode2: generateResource('idnode2', 'Resource1', 300, 300, [
      'res1node1',
      'res1node2',
    ]),
  },
  resourceSubNodes: {
    // list of all resource nodes
    res1node1: generateResSubNode('res1node1', 'Resource Node 1', 'tabid0'),
    res1node2: generateResSubNode('res1node2', 'Resource Node 2', 'tabid0'),
  },
} as Roadmap);

export default roadmap;
