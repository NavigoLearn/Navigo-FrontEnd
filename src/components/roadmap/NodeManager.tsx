import React, {
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import {
  isNodeInfoProps,
  isNodeResourceProps,
} from '@type/roadmap/typecheckers';
import { getNodeById } from '@store/roadmap_static';
import { addDraggability } from '@typescript/roadmap/roadmap-render';
import levels from '@styles/levelStyles';
import Node from './nodes/node-info/Node';
import Resource from './nodes/node-resource/Resource';

const NodeManager = ({ data, editing, triggerCb }: any) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const objRef = useRef<SVGForeignObjectElement>(null);
  const [render, setRender] = useState(true);
  const dataRef = useRef(data);

  function triggerRender() {
    setRender((val) => !val);
    // used for selective rerendering of the nodes
  }

  useLayoutEffect(() => {
    triggerCb(triggerRender);
  }, []);

  useEffect(() => {
    // things to trigger on rerender
    if (rootRef) {
      // updates the size of the foreignObject to match the size of the div for draggability and movement purposes
      const width = `${rootRef.current.offsetWidth}`;
      const height = `${rootRef.current.offsetHeight}`;
      objRef.current.setAttribute('width', width);
      objRef.current.setAttribute('height', height);
    }
  }, [render]);

  useEffect(() => {
    addDraggability(data.id, editing);
  }, [editing]);

  const renderNode = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { id } = data as NodeInfoProps;
    let node;
    if (editing) {
      node = getNodeById(id);
    } else {
      node = data;
    }
    dataRef.current = node;
    if (isNodeInfoProps(node)) {
      const { title, tabId, level } = node;
      return (
        <Node
          level={level}
          editing={editing}
          id={id}
          title={title}
          tabId={tabId}
        />
      );
    }
    if (isNodeResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes, level } = node;
      return (
        <Resource level={level} id={idNode} title={title} nodes={resNodes} />
      );
    }
    throw new Error('something went wrong');
  };
  const renderedNode = useMemo(() => {
    return renderNode();
  }, [render]);

  const compOpacity = levels[dataRef.current.level].comp;

  return (
    <g id={`group${data.id}`} transform={`translate(${data.x},${data.y})`}>
      <foreignObject ref={objRef} className='bg-transparent '>
        <div
          ref={rootRef}
          className={`  inline-block  bg-transparent  ${compOpacity} `}
        >
          {renderedNode}
        </div>
      </foreignObject>
    </g>
  );
};

export default NodeManager;
