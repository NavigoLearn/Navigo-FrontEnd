import * as d3 from 'd3';

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

export const a = 0;
