import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import {
  setRoadmap,
  getRoadmap,
  changeAbout,
  changeInfoNode,
  changeInfoTab,
  changeInfoTabLink,
  changeInfoTabRoadmapId,
  changeResourceSubNode,
  changeIssue,
  changeResourceNode,
  changeInfoTabProp,
} from '@store/roadmap_edit';
import roadmap1 from '@mocks/roadmaps';

describe('test roadmap editing logic', () => {
  beforeAll(() => {
    setRoadmap(roadmap1);
  });
  it('change roadmap about', () => {
    const roadmap = getRoadmap();
    changeAbout('name', 'new name');
    expect(roadmap.about.name).toBe('new name');
    changeAbout('name', 'testtsname 1');
    expect(roadmap.about.name).toBe('testtsname 1');
    changeAbout('author', 'authorus');
    expect(roadmap.about.author).toBe('authorus');
    changeAbout('description', 'descriptionus');
    expect(roadmap.about.description).toBe('descriptionus');
  });

  it('change roadmap info Tab', () => {
    let roadmap = getRoadmap();
    changeInfoTabProp('tabid0', 'title', 'Docker');
    expect(roadmap.data['tabid0'].title).toBe('Docker');
    // does the same testing for: done, description, links, roadmap, additionalInfo
    changeInfoTabProp('tabid0', 'done', true);
    expect(roadmap.data['tabid0'].done).toBe(true);
    changeInfoTabLink('tabid0', 0, 'title', 'Docker');
    expect(roadmap.data['tabid0'].links[0].title).toBe('Docker');
  });

  it('change roadmap info Node', () => {
    let roadmap = getRoadmap();
    changeInfoNode('idnode1', 'title', 'Newnodetesthere');
    expect(roadmap.nodes['idnode1'].title).toBe('Newnodetesthere');
    changeResourceNode('idnode2', 'title', 'Newnodetesthere');
    expect(roadmap.nodes['idnode2'].title).toBe('Newnodetesthere');
  });

  it('change issue info', () => {
    let roadmap = getRoadmap();
    changeIssue('id1Issue', 'title', 'newissuetitle');
    expect(roadmap.issues['id1Issue'].title).toBe('newissuetitle');
  });

  it('change Resource Subnodes', () => {
    let roadmap = getRoadmap();
    changeResourceSubNode('res1node1', 'title', 'newres1node1title');
    expect(roadmap.resourceSubNodes['res1node1'].title).toBe(
      'newres1node1title'
    );
  });

  it('change Info tab by id', () => {
    let roadmap = getRoadmap();
    // TODO info tab by id test
  });
});
