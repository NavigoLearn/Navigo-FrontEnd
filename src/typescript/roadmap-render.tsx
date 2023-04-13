import * as d3 from 'd3';
import ReactDOM, { Root } from 'react-dom/client';
import { NodeTypesProps } from '@type/roadmap/nodes';
import NodeManager from '@components/roadmap/NodeManager';
import React from 'react';
import roadmapEdit, {
  changeAnyNode,
  changeNodeCoords,
  getNodeCoords,
} from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import roadmapStatic from '@store/roadmap';
import { ConnectionStore } from '@type/roadmap/connections';
import { Roadmap } from '@type/roadmap/roadmap';
import { WritableAtom } from 'nanostores';
import selection, { setSelection } from '@store/selection';
import node from '@components/roadmap/nodes/node-info/Node';

function getNodeMiddleCoords(id: string) {
  const { x, y } = getNodeCoords(id);

  const { width, height } = document
    .querySelector(`#${id}`)
    .getBoundingClientRect();

  return {
    x: x + width / 2,
    y: y + height / 2,
  };
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

function renderConnectionsRoadmap(roadmap: WritableAtom<Roadmap>) {
  const roadmapData = roadmap.get();
  const { connections } = roadmapData;
  // creates array from the nodes json object
  const connectionsArray: ConnectionStore[] = Object.keys(connections).map(
    (key) => connections[key]
  );
  const g = document.getElementById('rootGroupConnections');
  const nodeSelection = d3
    .select(g)
    .selectAll('line')
    .data(connectionsArray, (d) => {
      return d.id;
    }); // Use the data value as the key function
  // we append line objects
  nodeSelection
    .enter()
    .append('line')
    .attr('id', (d: ConnectionStore) => d.id)
    .attr('x1', (d: ConnectionStore) => getNodeMiddleCoords(d.parentId).x)
    .attr('y1', (d: ConnectionStore) => getNodeMiddleCoords(d.parentId).y)
    .attr('x2', (d: ConnectionStore) => getNodeMiddleCoords(d.childId).x)
    .attr('y2', (d: ConnectionStore) => getNodeMiddleCoords(d.childId).y)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  nodeSelection
    .join('line')
    // .transition()
    // .duration(250)
    .attr('x1', (d: ConnectionStore) => getNodeMiddleCoords(d.parentId).x)
    .attr('y1', (d: ConnectionStore) => getNodeMiddleCoords(d.parentId).y)
    .attr('x2', (d: ConnectionStore) => getNodeMiddleCoords(d.childId).x)
    .attr('y2', (d: ConnectionStore) => getNodeMiddleCoords(d.childId).y);
}

export function renderConnections() {
  const { editing } = roadmapState.get();
  if (!editing) {
    renderConnectionsRoadmap(roadmapStatic);
  } else {
    renderConnectionsRoadmap(roadmapEdit);
  }
}

export function renderConnection(id, movingElementId, movingElementCoords) {
  const g = document.getElementById('rootGroupConnections');
  let nodeSelection = d3
    .select(g)
    .selectAll('line')
    .data([id], (d) => {
      return d;
    });

  nodeSelection = d3.select(`#${id}`);

  // get connection
  const connection = roadmapEdit.get().connections[id];
  const { parentId, childId } = connection;
  if (connection.parentId === movingElementId) {
    nodeSelection
      // .join('line')
      .attr(
        'x1',
        movingElementCoords.x + getNodeOffsetCoords(movingElementId).x
      )
      .attr(
        'y1',
        movingElementCoords.y + getNodeOffsetCoords(movingElementId).y
      )
      .attr('x2', getNodeMiddleCoords(childId).x)
      .attr('y2', getNodeMiddleCoords(childId).y)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  } else if (connection.childId === movingElementId) {
    nodeSelection
      // .join('line')
      .attr('x1', getNodeMiddleCoords(parentId).x)
      .attr('y1', getNodeMiddleCoords(parentId).y)
      .attr(
        'x2',
        movingElementCoords.x + getNodeOffsetCoords(movingElementId).x
      )
      .attr(
        'y2',
        movingElementCoords.y + getNodeOffsetCoords(movingElementId).y
      )
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  } else {
    throw new Error('moving element is not a part of the connection');
  }
}

function getTransformXY(transform: string) {
  const firstParanthesis = transform.indexOf('(');
  const lastParanthesis = transform.indexOf(')');
  const transformValues = transform
    .slice(firstParanthesis + 1, lastParanthesis)
    .split(',');
  return {
    x: parseInt(transformValues[0], 10),
    y: parseInt(transformValues[1], 10),
  };
}

export const addDraggability = (id: string, editing: boolean) => {
  const nodeSelection = d3.select('g').select(`#group${id}`);
  const offsets = { x: 0, y: 0 };
  const newPos = { x: 0, y: 0 };
  const drag = d3
    .drag()
    .on('start', function (event) {
      if (!editing) return;
      // sets the
      setSelection(d3.select(this).attr('id'));
      // coordinates of mouse click in the original reference system
      const { x } = event;
      const { y } = event;
      // coordinates of the node in the original reference system
      const transform = d3.select(this).attr('transform');
      const { x: nodeX, y: Nodey } = getTransformXY(transform);
      const offsetX = x - nodeX;
      const offsetY = y - Nodey;
      offsets.x = offsetX;
      offsets.y = offsetY;
      newPos.x = nodeX;
      newPos.y = Nodey;
    })
    .on('drag', function (event, d) {
      if (!editing) return;
      // event x and event y are measures from the top left corner of the svg
      newPos.x = event.x - offsets.x;
      newPos.y = event.y - offsets.y; // offsets used only for dragging purposes not for actual save

      d3.select(this).attr('transform', `translate(${newPos.x}, ${newPos.y})`);
    })
    .on('end', function (event, d) {
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
