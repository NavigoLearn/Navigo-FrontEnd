import React, {
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import { NodeInfoProps } from '@type/roadmap/nodes';
import {
  isNodeInfoProps,
  isNodeResourceProps,
} from '@type/roadmap/typecheckers';
import Node from './nodes/node-info/Node';
import Resource from './nodes/node-resource/Resource';

const NodeManager2 = ({ data, renderTrigger, sizeCb }: any) => {
  // console.log('NodeManager rerendered', data);
  const rootRef = useRef<HTMLDivElement>(null);
  const objRef = useRef<SVGForeignObjectElement>(null);
  const { editing } = useStore(roadmapState);

  const [render, setRender] = useState(true);

  function triggerRender() {
    console.log('triggerRender', data.id);
    setRender(!render);
    // used for selective rerendering of the nodes
  }

  useLayoutEffect(() => {
    renderTrigger(triggerRender);
  }, []);

  useEffect(() => {
    // things to trigger on rerender
    if (rootRef) {
      const width = `${rootRef.current.offsetWidth}`;
      const height = `${rootRef.current.offsetHeight}`;
      objRef.current.setAttribute('width', width);
      objRef.current.setAttribute('height', height);
    }
  }, [render]);

  const renderNode = () => {
    // we fetch the data from the nanostores here in order to get rerendering on data change
    const { id } = data as NodeInfoProps;
    const node = data;
    if (isNodeInfoProps(node)) {
      const { title, tabId } = node;
      return <Node id={id} title={title} tabId={tabId} />;
    }
    if (isNodeResourceProps(node)) {
      const { id: idNode, title, nodes: resNodes } = node;
      return <Resource id={idNode} title={title} nodes={resNodes} />;
    }
    throw new Error('something went wrong');
  };
  const renderedNode = useMemo(() => renderNode(), [render]);

  return (
    <g transform={`translate(${data.x},${data.y})`}>
      <foreignObject ref={objRef}>
        <div ref={rootRef} className=' inline-block border-0 '>
          {renderedNode}
        </div>
      </foreignObject>
    </g>
  );
};

export default NodeManager2;
