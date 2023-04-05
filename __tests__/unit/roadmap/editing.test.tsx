import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import roadmapEdit, { changeResourceNode } from '@store/roadmap_edit';
import {
  setRoadmap,
  getRoadmap,
  changeAbout,
  changeInfoNode,
  changeInfoTab,
  changeInfoTabLink,
  changeInfoTabRoadmapId,
  changeIssue,
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
    changeInfoTab('tabid0', 'title', 'Docker');
    expect(roadmap.data['tabid0'].title).toBe('Docker');
    // does the same testing for: done, description, links, roadmap, additionalInfo
    changeInfoTab('tabid0', 'done', true);
    expect(roadmap.data['tabid0'].done).toBe(true);
    changeInfoTabLink('tabid0', 0, 'title', 'Docker');
    expect(roadmap.data['tabid0'].links[0].title).toBe('Docker');
  });

  it('change roadmap info Node', () => {
    let roadmap = getRoadmap();
    changeInfoNode('idnode2', 'title', 'Newnodetesthere');
    expect(roadmap.nodes['idnode2'].title).toBe('Newnodetesthere');
    changeResourceNode();
  });
});
