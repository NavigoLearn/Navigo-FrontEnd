import * as d3 from 'd3';
import ReactDOM, { Root } from 'react-dom/client';
import { NodeTypesProps } from '@type/roadmap/nodes';
import NodeManager from '@components/roadmap/NodeManager';
import React from 'react';
import roadmapEdit, { changeAnyNode, getNodeCoords } from '@store/roadmap_edit';
import roadmapState from '@store/roadmap_state';
import roadmapStatic, { setTrigger } from '@store/roadmap';
import { ConnectionStore } from '@type/roadmap/connections';
import { Roadmap } from '@type/roadmap/roadmap';
import { WritableAtom } from 'nanostores';
import selection, { setSelection } from '@store/selection';

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

export function renderNode(root: Root, data: NodeTypesProps, foreignObject) {
  root.render(
    <NodeManager
      data={data}
      sizeCb={(width: number, height: number) => {
        // sets foreignObject size to the size of the rendered component
        foreignObject.attr('width', width).attr('height', height);
        // TODO optmize connection rendering not call it for every node
        // renderConnections();
      }}
      renderTrigger={(callBack) => {
        // sets cb to be called when node should be rerendered
        setTrigger(data.id, callBack);
      }}
    />
  );
}

export function appendToD3(obj, data: NodeTypesProps) {
  const current = d3.select(obj);
  let foreignObject = current.select('foreignObject');
  foreignObject = current
    .append('foreignObject')
    .attr('x', '0')
    .attr('y', '0')
    .attr('width', '100')
    .attr('height', '100')
    .attr('overflow', 'visible');
  const rootDiv = foreignObject.append('xhtml:div');
  // added a div to the foreignObject as a workaround for a bug in d3
  // If I rendered the comp directly beneath the foreignObject it would get a weird click effect with a border showing up

  const root = ReactDOM.createRoot(rootDiv.node());
  renderNode(root, data, foreignObject);
}

const renderNodesRoadmap = (roadmap: WritableAtom<Roadmap>) => {
  // same as connections but for nodes
  const roadmapData = roadmap.get();
  const { editing } = roadmapState.get();
  const { nodes } = roadmapData;
  const nodesArray = Object.keys(nodes).map((key) => nodes[key]);
  const g = document.getElementById('rootGroupNodes');

  const nodeSelection = d3
    .select(g)
    .selectAll('g')
    .data(nodesArray, (d) => {
      return d.id;
    }); // Use the data value as the key function

  const drag = d3
    .drag()
    .on('start', function () {
      // called when the drag starts
      // select the connections related to the node and puts their ids in selection state
      setSelection(d3.select(this).attr('id'));
    })
    .on('drag', function (event, d) {
      // called when the element is being dragged
      if (!editing) return;
      // update the connections related to the node but not rerender the roadmap again each time!!!
      const { selectedNodeId: nodeId, adjacentConnectionsId: connections } =
        selection.get();

      // TODO uncomment this
      // for (let i = 0; i < connections.length; i += 1) {
      //   renderConnection(connections[i], nodeId, { x: event.x, y: event.y });
      // }
      d3.select(this).attr('transform', `translate(${event.x}, ${event.y})`);
    })
    .on('end', function (event, d) {
      // saving the new position of the node
      if (!editing) return;
      if (
        roadmapEdit.get().nodes[d.id].x === event.x &&
        roadmapEdit.get().nodes[d.id].y === event.y
      )
        return;
      changeAnyNode(d.id, 'x', event.x);
      changeAnyNode(d.id, 'y', event.y);
    });

  nodeSelection
    .enter()
    .append('g')
    .attr('id', (d) => d.id)
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
    .call(drag)
    .each(function (d) {
      appendToD3(this, d);
    });
  // calls drag again on the existing elements
  nodeSelection.call(drag);
};

export const renderNodesIds = (
  roadmap: WritableAtom<Roadmap>,
  nodesIds: string[]
) => {
  // same as connections but for nodes
  const roadmapData = roadmap.get();
  const { editing } = roadmapState.get();
  const { nodes } = roadmapData;

  const nodesArray = nodesIds.map((key) => nodes[key]);
  const g = document.getElementById('rootGroupNodes');
  // console.log('rendered node', nodesArray);

  const nodeSelection = d3
    .select(g)
    .selectAll('g')
    .data(nodesArray, (d) => {
      return d.id;
    }); // Use the data value as the key function

  const drag = d3
    .drag()
    .on('start', function () {
      // called when the drag starts
      // select the connections related to the node and puts their ids in selection state
      setSelection(d3.select(this).attr('id'));
    })
    .on('drag', function (event, d) {
      // called when the element is being dragged
      if (!editing) return;
      // update the connections related to the node but not rerender the roadmap again each time!!!
      const { selectedNodeId: nodeId, adjacentConnectionsId: connections } =
        selection.get();

      d3.select(this).attr('transform', `translate(${event.x}, ${event.y})`);
    })
    .on('end', function (event, d) {
      // saving the new position of the node
      if (!editing) return;
      if (
        roadmapEdit.get().nodes[d.id].x === event.x &&
        roadmapEdit.get().nodes[d.id].y === event.y
      )
        return;
      changeAnyNode(d.id, 'x', event.x);
      changeAnyNode(d.id, 'y', event.y);
    });

  nodeSelection
    .enter()
    .append('g')
    .attr('id', (d) => d.id)
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
    .call(drag)
    .each(function (d) {
      appendToD3(this, d);
    });

  console.log('called rendering');
  nodeSelection.exit().remove('g');
  // calls drag again on the existing elements
  nodeSelection.call(drag);
};
export function renderNodes() {
  // renders some elements in svg based on an array
  const { editing } = roadmapState.get();
  if (!editing) {
    renderNodesRoadmap(roadmapStatic);
  } else {
    renderNodesRoadmap(roadmapEdit);
  }
}
