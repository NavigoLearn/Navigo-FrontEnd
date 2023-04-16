import React, { useEffect } from 'react';
import { renderNodeNormal } from '@components/roadmap/nodes/node-resource/utils';
import {
  addNodeNew,
  addResourceSubNodeNew,
} from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { getNodeByIdEdit } from '@typescript/roadmap/roadmap-edit-logic';
import { isNodeResourceStore } from '@type/roadmap/typecheckers';
import { setToolTip } from '@store/runtime/miscParams';
import ButtonsView from '@components/roadmap/nodes/misc/ButtonsView';

const ResourceNonEditProps = ({
  id: idProp,
  setCb,
}: NonEditingComponentProps) => {
  const node = getNodeByIdEdit(idProp);
  if (!isNodeResourceStore(node)) {
    throw new Error('node is not a resource');
  }
  const renderButtons = () => {
    return <ButtonsView id={idProp} type={node.type} />;
  };
  useEffect(() => {
    setToolTip(idProp, () => {
      return renderButtons();
    });
  }, []);

  return (
    <div>
      <div className=' py-4 flex items-center justify-between  '>
        <button
          type='button'
          onClick={() => {
            addNodeNew(idProp, 'Info');
          }}
        >
          Add node
        </button>
        <div className='text-lg  text-placeholder'>{node.title}</div>
        <button
          type='button'
          onClick={() => {
            setCb();
          }}
        >
          Edit Node
        </button>
      </div>
      {node.nodes.map((id) => {
        return renderNodeNormal(id, idProp);
      })}
    </div>
  );
};

export default ResourceNonEditProps;
