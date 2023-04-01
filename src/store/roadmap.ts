import { atom } from 'nanostores';

const roadmap = atom({
  about: {
    name: '',
    author: '',
    description: '',
  },
  issues: [
    {
      id: '1',
      title: 'Issue 1',
      author: 'Author 1',
    },
    {
      id: '2',
      title: 'Issue 2',
      author: 'Author 2',
    },
    {
      id: '3',
      title: 'Issue 3',
      author: 'Author 3',
    },
  ],
  data: {
    // the basic nodes data
    tabid1: {
      title: 'tab1',
      done: false,
      description: 'this is a tab',
      links: ['link1', 'link2'],
      roadmap: 'tab1 roadmao',
      additionalInfo: 'this is some lorem ipsum addition info',
    },
    tabid2: {
      title: 'tab2',
      done: false,
      description: 'this is a tab',
      links: ['link1', 'link2'],
      roadmap: 'tab1 roadmao',
      additionalInfo: 'this is some lorem ipsum addition info',
    },
    tabid3: {
      title: 'tab3',
      done: false,
      description: 'this is a tab',
      links: ['link1', 'link2'],
      roadmap: 'tab1 roadmao',
      additionalInfo: 'this is some lorem ipsum addition info',
    },
  },

  nodes: [
    // list of all nodes
    {
      id: '1',
      title: 'Node 1',
      nodeType: 'Node',
      tabId: 'tabid1',
      x: 100,
      y: 500,
    },
    {
      id: 'res1',
      nodeType: 'Resource',
      title: 'My Resource',
      x: 400,
      y: 400,
      nodes: ['res1node1', 'res1node2'],
    },
  ],
  resourceNodes: {
    // list of all resource nodes
    res1node1: {
      id: 'res1node1',
      title: 'Resource Node 1',
      nodeType: 'resourceSubNode',
      tabId: 'tabid2',
    },
    res1node2: {
      id: 'res1node2',
      title: 'Resource Node 2',
      nodeType: 'resourceSubNode',
      tabId: 'tabid3',
    },
  },
} as any);

export default roadmap;
