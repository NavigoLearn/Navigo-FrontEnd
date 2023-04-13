import * as d3 from 'd3';

import { renderChunks, setChunks } from '@store/runtime/renderedChunks';

function add(a, b) {
  return a + b;
}
export default add;

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func.apply(this, args);
  };
}
export function calculateViewportCoordinates(transform: any) {
  // Get the SVG element and its dimensions
  const svg = d3.select('#rootSvg');
  const svgBoundingClientRect = svg.node().getBoundingClientRect();
  const { width, height } = svgBoundingClientRect;

  const viewportX = -transform.x / transform.k;
  const viewportY = -transform.y / transform.k;

  // Calculate the current viewport width and height
  const viewportWidth = width / transform.k;
  const viewportHeight = height / transform.k;

  const viewport = {
    startX: viewportX,
    startY: viewportY,
    endX: viewportX + viewportWidth,
    endY: viewportY + viewportHeight,
  };
  return viewport;
}

export function calculateRenderedChunks(transform: any) {
  const viewport = calculateViewportCoordinates(transform);
  // calculate the chunks that should be rendered
  const chunkSize = 400;
  // expand the viewport to include the chunks that are partially visible
  const expandedViewport = {
    startX: viewport.startX - chunkSize / 2,
    startY: viewport.startY - chunkSize / 2,
    endX: viewport.endX + chunkSize,
    endY: viewport.endY + chunkSize,
  };
  // we calculate the chunks present on the passed viewport
  const firstChunkCoordX = Math.floor(expandedViewport.startX / chunkSize);
  const firstChunkCoordY = Math.floor(expandedViewport.startY / chunkSize);
  const lastChunkCoordX = Math.floor(expandedViewport.endX / chunkSize);
  const lastChunkCoordY = Math.floor(expandedViewport.endY / chunkSize);

  const renderedChunks = [];
  for (let i = firstChunkCoordX; i <= lastChunkCoordX; i += 1) {
    for (let j = firstChunkCoordY; j <= lastChunkCoordY; j += 1) {
      renderedChunks.push(`${i}_${j}`);
      // enconding the present chunks in the app
      // i and j are the chunk coordinates of the top left corner
    }
  }
  setChunks(renderedChunks);
  renderChunks();

  // set the rendered chunks in the store
}

export const renderRoadmapChunks = (obj, func) => {
  func(d3.zoomTransform(obj));
};

export class RoadmapChunkingManager {
  svgRef: any;

  svgRefId: string;

  throttledRendering: any;

  constructor(svgRefId: string) {
    this.svgRefId = svgRefId;
    this.svgRef = document.getElementById(svgRefId);
    this.throttledRendering = throttle(calculateRenderedChunks, 50);
    this.throttledRendering(d3.zoomTransform(this.svgRef));
  }

  recalculateChunks() {
    this.throttledRendering(d3.zoomTransform(this.svgRef));
  }
}
export const addZoom = (rootSvgId, rootGroupId, rerender) => {
  const svg = d3.select(`#${rootSvgId}`);
  rerender();
  function zoomed() {
    // triggers the chunk rendering flow
    rerender();
    d3.select(`#${rootGroupId}`).attr('transform', d3.zoomTransform(this));
  }
  svg.call(
    d3
      .zoom()
      .scaleExtent([1 / 2, 2])
      .on('zoom', zoomed)
  );
  svg.on('dblclick.zoom', null);
};
