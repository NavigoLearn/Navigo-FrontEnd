import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import {
  setRoadmap,
  getRoadmap,
  changeResourceSubNode,
  changeIssue,
  changeTabAboutProp,
  changeTabInfoProp,
  changeNodeInfo,
  changeNodeResource,
} from '@typescript/roadmap/roadmap-edit-logic';
import roadmap1 from '@mocks/roadmaps';

describe('test roadmap_static editing logic', () => {
  beforeAll(() => {
    setRoadmap(roadmap1);
  });
  it('change roadmap_static about', () => {
    const roadmap = getRoadmap();
    changeTabAboutProp('name', 'new name');
    expect(roadmap.about.name).toBe('new name');
    changeTabAboutProp('name', 'testtsname 1');
    expect(roadmap.about.name).toBe('testtsname 1');
    changeTabAboutProp('author', 'authorus');
    expect(roadmap.about.author).toBe('authorus');
    changeTabAboutProp('description', 'descriptionus');
    expect(roadmap.about.description).toBe('descriptionus');
  });

  it('change roadmap_static info Tab', () => {
    let roadmap = getRoadmap();
    changeTabInfoProp('tabid0', 'title', 'Docker');
    expect(roadmap.data['tabid0'].title).toBe('Docker');
    // does the same testing for: done, description, links, roadmap_static, additionalInfo
    changeTabInfoProp('tabid0', 'done', true);
    expect(roadmap.data['tabid0'].done).toBe(true);
  });

  it('change roadmap_static info Node', () => {
    let roadmap = getRoadmap();
    changeNodeInfo('idnode1', 'title', 'Newnodetesthere');
    expect(roadmap.nodes['idnode1'].title).toBe('Newnodetesthere');
    changeNodeResource('idnode2', 'title', 'Newnodetesthere');
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
    expect(roadmap.resources['res1node1'].title).toBe('newres1node1title');
  });

  it('change Info tab by id', () => {
    let roadmap = getRoadmap();
    // TODO info tab by id test
  });
});
