import * as d3 from 'd3';

function add(a, b) {
  return a + b;
}
export default add;

export const addZoom = (rootSvg: string, rootGroup: string) => {
  const svg = d3.select(rootSvg);
  function zoomed() {
    d3.select(rootGroup).attr('transform', d3.zoomTransform(this));
  }
  svg.call(
    d3
      .zoom()
      .scaleExtent([1 / 3, 3])
      .on('zoom', zoomed)
  );
  svg.on('dblclick.zoom', null);
};
