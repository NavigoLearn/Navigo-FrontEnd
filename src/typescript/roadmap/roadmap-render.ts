import * as d3 from 'd3';
import roadmapEdit from '@store/roadmap_edit';
import roadmapStatic from '@store/roadmap_static';
import roadmapState from '@store/roadmap_state';
import { ConnectionStore } from '@type/roadmap/connections';
import selection, { setSelection } from '@store/selection';
import { changeNodeCoords } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import renderConnectionsStore from '@store/runtime/renderedConnections';
import { NodeTypesStore } from '@type/roadmap/nodes';
import {
  isNodeInfoStore,
  isNodeResourceStore,
} from '@type/roadmap/typecheckers';
import cachedNodeCoords, {
  cacheNodeCoord,
} from '@store/runtime/cached-node-coords';
import cachedCoords from '@store/runtime/cached-node-coords';

function getTransformXY(transform: string) {
  const firstParentheses = transform.indexOf('(');
  const lastParentheses = transform.indexOf(')');
  const transformValues = transform
    .slice(firstParentheses + 1, lastParentheses)
    .split(',');
  return {
    x: parseInt(transformValues[0], 10),
    y: parseInt(transformValues[1], 10),
  };
}
function calculateMiddleOfNodeOffsetStatic(node: NodeTypesStore) {
  const offset = {
    x: 0,
    y: 0,
  };
  if (isNodeInfoStore(node)) {
    offset.x = 256; // calculates the default values for each node type based on their properties
    offset.y = 30; // this way we dont need to actually render the nodes to get their sizes which would be an expensive opration
    // although switching to actually rendering all needed nodes for connections might be necessary if the nodes grow in complexity
  }

  if (isNodeResourceStore(node)) {
    offset.x = 256;
    offset.y = 60;
  }

  return offset;
}

function calculateMiddleOfNodeOffsetDynamic(id) {
  const offset = {
    x: 0,
    y: 0,
  };
  const groupId = `group${id}`;
  const nodeGroup = document.getElementById(groupId);
  // gets node group bounding box
  const { width, height } = nodeGroup.getBoundingClientRect();
  // calculates offset
  offset.x = width / 2;
  offset.y = height / 2;
  return offset;
}
function calculateCoordOfNodeDynamic(id) {
  // used for updating the connections while dragging a node
  const coord = {
    x: 0,
    y: 0,
  };
  const groupId = `group${id}`;
  const nodeGroup = document.getElementById(groupId);
  // gets the translate value of the node group
  const transform = nodeGroup.getAttribute('transform');
  const translate = transform.split('(')[1].split(')')[0].split(',');
  coord.x = Number(translate[0]);
  coord.y = Number(translate[1]);
  const offset = calculateMiddleOfNodeOffsetDynamic(id);
  coord.x += offset.x;
  coord.y += offset.y;
  return coord;
}

function calculateCoordOfNodeStatic(id) {
  // used for updating the connections while dragging a node
  const coord = {
    x: 0,
    y: 0,
  };
  const node = roadmapEdit.get().nodes[id];
  const groupId = `group${id}`;
  const nodeGroup = document.getElementById(groupId);
  // gets the translate value of the node group
  const transform = nodeGroup.getAttribute('transform');
  const translate = transform.split('(')[1].split(')')[0].split(',');
  coord.x = Number(translate[0]);
  coord.y = Number(translate[1]);

  const { x: width, y: height } = calculateMiddleOfNodeOffsetStatic(node);
  coord.x += width / 2;
  coord.y += height / 2;
  return coord;
}

export function getNodeCoords(id: string) {
  const offset = {
    x: 0,
    y: 0,
  };
  const groupId = `group${id}`;
  const nodeGroup = document.getElementById(groupId);
  // gets node group bounding box
  const transform = nodeGroup.getAttribute('transform');
  const { x, y } = getTransformXY(transform);
  // calculates offset
  offset.x = x;
  offset.y = y;

  return offset;
}

function getNodeMiddleCoords(id: string) {
  const { editing } = roadmapState.get();
  const original = editing ? roadmapEdit.get() : roadmapStatic.get();
  const { nodes } = original;
  if (!nodes[id]) throw new Error('node not found');
  const node = nodes[id];
  const { x, y } = node;
  // const { x: width, y: height } = calculateMiddleOfNodeOffsetDynamic(id);
  const { x: width, y: height } = calculateMiddleOfNodeOffsetStatic(node);
  return {
    x: x + width / 2,
    y: y + height / 2,
  };
}
function getNodeMiddleCoordsFlow(id: string) {
  const cache = cachedCoords.get();
  // checks if its already in cache
  // if yes takes from cache
  if (cache[id]) return cache[id];
  // if no calls the normal calculations
  const coords = getNodeMiddleCoords(id);
  // adds to cache
  cacheNodeCoord(id, coords);
  return coords;
}

function getNodeOffsetCoords(id: string) {
  const { width, height } = document
    .querySelector(`#${id}`)
    .getBoundingClientRect();

  return {
    x: width / 2,
    y: height / 2,
  };
}

export function renderConnections() {
  const renderConns = renderConnectionsStore.get();
  const { connections: connIds } = renderConns;
  const { editing } = roadmapState.get();
  const original = editing ? roadmapEdit.get() : roadmapStatic.get();
  const { connections } = original;

  // creates an array from the nodes json object
  const connectionArray: ConnectionStore[] = connIds.map(
    (key) => connections[key]
  );

  const g = document.getElementById('rootGroupConnections');
  const nodeSelection = d3
    .select(g)
    .selectAll('line')
    .data(connectionArray, (d) => {
      return d.id;
    }); // Use the data value as the key function
  // calculates the middle of the node for each node
  // we append line objects
  nodeSelection
    .enter()
    .append('line')
    .attr('id', (d: ConnectionStore) => d.id)
    .attr('x1', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.parentId).x)
    .attr('y1', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.parentId).y)
    .attr('x2', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.childId).x)
    .attr('y2', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.childId).y)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // this should happen only in editing mode when a node is moving
  nodeSelection
    .attr('id', (d: ConnectionStore) => d.id)
    .attr('x1', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.parentId).x)
    .attr('y1', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.parentId).y)
    .attr('x2', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.childId).x)
    .attr('y2', (d: ConnectionStore) => getNodeMiddleCoordsFlow(d.childId).y)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  nodeSelection.exit().remove();
}

export function updateConnections() {
  // called when a node is moved via dragging
  const { adjacentConnectionsId: connIds } = selection.get();
  const { connections } = roadmapEdit.get();
  // creates an array from the nodes json object
  const connectionArray: ConnectionStore[] = connIds.map(
    (key) => connections[key]
  );

  const g = document.getElementById('rootGroupConnections');
  const nodeSelection = d3
    .select(g)
    .selectAll('line')
    .data(connectionArray, (d) => {
      return d.id;
    }); // Use the data value as the key function

  // calculates the new positions based on the new node positions
  nodeSelection

    .attr(
      'x1',
      (d: ConnectionStore) => calculateCoordOfNodeStatic(d.parentId).x
    )

    .attr(
      'y1',
      (d: ConnectionStore) => calculateCoordOfNodeStatic(d.parentId).y
    )
    .attr('x2', (d: ConnectionStore) => calculateCoordOfNodeStatic(d.childId).x)
    .attr(
      'y2',
      (d: ConnectionStore) => calculateCoordOfNodeStatic(d.childId).y
    );
}

export const addDraggability = (id: string, editing: boolean) => {
  const nodeSelection = d3.select('g').select(`#group${id}`);
  const offsets = { x: 0, y: 0 };
  const newPos = { x: 0, y: 0 };
  const drag = d3
    .drag()
    // eslint-disable-next-line func-names
    .on('start', function (event) {
      if (!editing) return;
      // sets the
      setSelection(id);
      // coordinates of mouse click in the original reference system
      const { x } = event;
      const { y } = event;
      // coordinates of the node in the original reference system
      const transform = d3.select(this).attr('transform');
      const { x: nodeX, y: NodeY } = getTransformXY(transform);
      const offsetX = x - nodeX;
      const offsetY = y - NodeY;
      offsets.x = offsetX;
      offsets.y = offsetY;
      newPos.x = nodeX;
      newPos.y = NodeY;
    })
    // eslint-disable-next-line func-names
    .on('drag', function (event) {
      if (!editing) return;
      // event x and event y are measures from the top left corner of the svg
      newPos.x = event.x - offsets.x;
      newPos.y = event.y - offsets.y; // offsets used only for dragging purposes not for actual save

      d3.select(this).attr('transform', `translate(${newPos.x}, ${newPos.y})`);
      // triggers the update of the connections
      updateConnections();
    })
    // eslint-disable-next-line func-names
    .on('end', function () {
      if (!editing) return;
      if (
        roadmapEdit.get().nodes[id].x === newPos.x &&
        roadmapEdit.get().nodes[id].y === newPos.y
      )
        return;
      changeNodeCoords(id, newPos.x, newPos.y);
    });

  nodeSelection.call(drag);
};
