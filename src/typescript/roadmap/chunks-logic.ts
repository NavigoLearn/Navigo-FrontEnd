import roadmapState from '@store/roadmap_state';
import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import { setNodes } from '@store/runtime/renderedNodes';
import chunksStore, { setChunks } from '@store/runtime/renderedChunks';
import * as d3 from 'd3';

export function renderChunks() {
  const { editing } = roadmapState.get();
  let chunks: any;
  if (editing) chunks = roadmapEdit.get().chunks;
  else chunks = roadmapStatic.get().chunks;

  const chunksIds = chunksStore.get().chunks;

  const nodesArray: string[] = [];
  chunksIds.forEach((chunkId) => {
    // gets the array of nodes for each chunk id
    const nodes = chunks[chunkId];
    if (nodes !== undefined) {
      nodesArray.push(...nodes);
    }
  });
  // sets the nodes that should be rendered ( calculated from the chunks visible )
  setNodes(nodesArray);
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

export function calculateRenderedChunks(
  transform: { k: number; x: number; y: number },
  chunkSize: number
) {
  // calculate the chunks that should be rendered on the current viewport
  const viewport = calculateViewportCoordinates(transform);
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
      // enconding the present chunks in the app
      // i and j are the chunk coordinates of the top left corner
      renderedChunks.push(`${i}_${j}`);
    }
  }
  setChunks(renderedChunks);
  renderChunks();
}
function throttle(func, delay) {
  // throttleing function for optimization purposes
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}
export class RoadmapChunkingManager {
  svgRef: any;

  svgRefId: string;

  throttledRendering: any;

  chunkSize: number;

  constructor(svgRefId: string) {
    // setup for the chunking manager
    this.svgRefId = svgRefId;
    this.svgRef = document.getElementById(svgRefId);
    this.throttledRendering = throttle(calculateRenderedChunks, 50);
    this.chunkSize = roadmapStatic.get().chunkSize;
  }

  recalculateChunks() {
    this.throttledRendering(d3.zoomTransform(this.svgRef), this.chunkSize);
  }
}
