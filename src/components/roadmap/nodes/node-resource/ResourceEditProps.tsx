import React, { useEffect } from 'react';

import ResourceSubNodeEdit from '@components/roadmap/nodes/node-resource/sub-node/ResourceSubNodeEdit';
import roadmapPlaceholder, {
  getNodeByIdPlaceholder,
  changeNodeResource,
  addResourceSubNodeNew,
} from '@store/runtime/roadmap-placeholder';
import { EditingComponentNodesProps } from '@type/roadmap/components';
import TitleEdit from '@components/roadmap/nodes/node-info/editable-fields/InfoTitleEdit';
import { isNodeResourceStore } from '@type/roadmap/typecheckers';
import SaveCancelButtons from '@components/roadmap/nodes/misc/SaveButtons';
import { setToolTip, setZoomAllowed } from '@store/runtime/miscParams';

const ResourceEditProps = ({
  id,
  onSave,
  onCancel,
}: EditingComponentNodesProps) => {
  const node = getNodeByIdPlaceholder(id);
  if (!isNodeResourceStore(node))
    throw new Error('node is not of type NodeResourceStore');
  const renderButtons = () => {
    return <SaveCancelButtons onSave={onSave} onCancel={onCancel} />;
  };

  useEffect(() => {
    setToolTip(id, () => {
      return renderButtons();
    });
  }, []);

  return (
    <div
      onMouseEnter={() => {
        setZoomAllowed(false);
      }}
      onMouseLeave={() => {
        setZoomAllowed(true);
      }}
      onTouchStart={() => {
        setZoomAllowed(false);
      }}
      onTouchEnd={() => {
        setZoomAllowed(true);
      }}
      className='border-2 border-green-400'
    >
      <TitleEdit
        originalValue={node.title}
        onChange={(newTitle) => {
          if (typeof newTitle === 'string')
            changeNodeResource(id, 'title', newTitle);
          else throw new Error('newTitle is not of type string');
        }}
      />
      <button
        type='button'
        onClick={() => {
          // add a new sub node
          addResourceSubNodeNew(id);
        }}
      >
        Add a resource
      </button>
      {node.nodes.map((idProp) => {
        const data = roadmapPlaceholder.get().resources[idProp];
        return (
          <div key={data.id} className='flex justify-center items-center my-2'>
            <ResourceSubNodeEdit parentId={id} id={idProp} />
          </div>
        );
      })}
    </div>
  );
};

export default ResourceEditProps;
