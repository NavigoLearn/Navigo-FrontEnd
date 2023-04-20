import * as d3 from 'd3';
import roadmapStatic from '@store/roadmap_static';
import roadmapEdit from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import { deepCopy } from '@typescript/roadmap/utils';
import { calculateMiddleOfNodeOffsetStatic } from '@typescript/roadmap/roadmap-render';
import { setRecenterRoadmap } from '@store/runtime/miscParams';

export const calculateRootNodeTransform = () => {
  const { editing } = roadmapState.get();
  const original = editing ? roadmapEdit.get() : roadmapStatic.get();
  const { nodes } = original;
  const rootNode = nodes.rootNodeId;
  const { x, y } = rootNode;
  const { x: widthNode, y: heightNode } =
    calculateMiddleOfNodeOffsetStatic(rootNode);

  // gets the current screen size
  const { innerWidth, innerHeight } = window;
  // calculates a transform that centers the root node in the middle of the screen
  const transform = {
    x: x - innerWidth / 2 + widthNode / 2,
    y: y - innerHeight / 2 + heightNode / 2 + 100,
    k: 1,
  };
  return transform;
};

export const addZoom = (rootSvgId, rootGroupId, rerender) => {
  const svg = d3.select(`#${rootSvgId}`);
  const rootGroup = d3.select(`#${rootGroupId}`);

  function zoomed() {
    rerender();
    this.zoomTransform = d3.zoomIdentity;
    rootGroup.attr('transform', d3.zoomTransform(this));
  }

  const zoom = d3
    .zoom()
    .scaleExtent([1 / 2, 2])
    .on('zoom', zoomed);

  svg.call(zoom);
  svg.on('dblclick.zoom', null);

  function resetZoom() {
    const initialTransform = calculateRootNodeTransform();
    const customTransform = d3.zoomIdentity
      .translate(-initialTransform.x, -initialTransform.y)
      .scale(initialTransform.k);
    svg.transition().duration(750).call(zoom.transform, customTransform);
  }
  setRecenterRoadmap(() => resetZoom());
  d3.select('#recenter-button').on('click', () => resetZoom());
};

export const addZoom2 = (rootSvgId, rootGroupId, rerender) => {
  const svg = d3.select(`#${rootSvgId}`);
  // rerender();
  function zoomed() {
    // triggers the chunk rendering flow
    rerender();
    this.zoomTransform = d3.zoomIdentity;
    d3.select(`#${rootGroupId}`).attr('transform', d3.zoomTransform(this));
  }

  const zoom = d3
    .zoom()
    .scaleExtent([1 / 2, 2])
    .on('zoom', zoomed);

  svg.call(zoom);
  svg.on('dblclick.zoom', null);

  function centerToRoot() {
    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
  }

  function resetZoom() {
    const rootTransform = deepCopy(d3.zoomIdentity);
    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
  }
  d3.select('#recenter-button').on('click', resetZoom);
};

export const disableZoom = (rootSvgId) => {
  const svg = d3.select(`#${rootSvgId}`);
  svg.on('.zoom', null);
};

export const a = 0;
