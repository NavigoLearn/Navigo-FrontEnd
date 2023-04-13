import { Roadmap } from '@type/roadmap/roadmap';
import {
  generateConnection,
  generateIssue,
  generateNodeInfo,
  generateNodeResource,
  generateResourceSubNode,
  generateTabAbout,
  generateTabInfo,
} from '@typescript/generators';

const roadmap: any = {
  about: generateTabAbout('', '', ''),
  issues: {
    id1Issue: generateIssue('id1Issue', 'Issue 1', 'Author 1'),
    id2Issue: generateIssue('id2Issue', 'Issue 2', 'Author 2'),
    id3Issue: generateIssue('id3Issue', 'Issue 3', 'Author 3'),
  },

  data: {
    // the basic nodes data
    tabid0: generateTabInfo(
      'tabid0',
      'ESLint',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),

    tabid1: generateTabInfo(
      'tabid1',
      'Some react roadmp1',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),
    tabid2: generateTabInfo(
      'tabid2',
      'Prettier node',
      false,
      'With eslint you can impose a coding standard using a certain set of rules and good practices',
      [
        { title: 'ESLint official Website', link: 'https://eslint.org/' },
        { title: 'Introduction to ESLint', link: 'https://eslint.org/' },
        { title: 'Some other useful Link', link: 'https://eslint.org/' },
      ],
      'this is some lorem ipsum addition info'
    ),
  },

  nodes: {
    // list of all nodes
    idnode1: generateNodeInfo('idnode1', 'Node1', 'tabid0', 100, 100, '', [
      'idnode2',
    ]),
    idnode2: generateNodeResource(
      'idnode2',
      'Resource1',
      300,
      300,
      ['resourceSubNodeId1', 'resourceSubNodeId2'],
      'idnode1'
    ),
  },
  resources: {
    // list of all resource nodes
    resourceSubNodeId1: generateResourceSubNode(
      'resourceSubNodeId1',
      'idnode2',
      'Resource Node 1',
      'tabid1'
    ),
    resourceSubNodeId2: generateResourceSubNode(
      'resourceSubNodeId2',
      'idnode2',
      'Resource Node 1',
      'tabid2'
    ),
  },
  connections: {
    // list of all connections
    idconnection1: generateConnection('idconnection1', 'idnode1', 'idnode2'),
  },
};

export default roadmap;
