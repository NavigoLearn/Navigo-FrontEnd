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
import { getNodeById } from '@store/roadmap';
import { addDraggability } from '@typescript/roadmap-render';
import Node from './nodes/node-info/Node';
import Resource from './nodes/node-resource/Resource';

const NodeManager2 = ({ data, editing, renderTrigger, triggerCb }: any) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const objRef = useRef<SVGForeignObjectElement>(null);
  const [render, setRender] = useState(true);

  function triggerRender() {
    setRender((val) => !val);
    // used for selective rerendering of the nodes
  }

  useLayoutEffect(() => {
    triggerCb(triggerRender);

    return () => {
      // cleanup
    };
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
    if (isNodeInfoProps(node)) {
      const { title, tabId } = node;
      return <Node editing={editing} id={id} title={title} tabId={tabId} />;
    }
    if (isNodeResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };
  const renderedNode = useMemo(() => {
    return renderNode();
  }, [render]);

  return (
    <g id={`group${data.id}`} transform={`translate(${data.x},${data.y})`}>
      <foreignObject ref={objRef}>
        <div ref={rootRef} className=' inline-block border-0 '>
          {renderedNode}
        </div>
      </foreignObject>
    </g>
  );
};

export default NodeManager2;
