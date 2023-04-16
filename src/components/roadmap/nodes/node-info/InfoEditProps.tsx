import React, { useEffect } from 'react';
import { getNodeByIdEdit } from '@typescript/roadmap/roadmap-edit-logic';
import { EditingComponentProps } from '@type/roadmap/components';
import {
  decreaseEditingCount,
  increaseEditingCount,
  setToolTip,
  setZoomAllowed,
} from '@store/runtime/miscParams';
import TitleEdit from '@components/roadmap/nodes/node-resource/editable-fields/ResourceTitleEdit';
import SaveCancelButtons from '@components/roadmap/nodes/misc/SaveButtons';
import { changeNodeInfo } from '@store/runtime/roadmap-placeholder';

const InfoEditProps = ({ id, onSave, onCancel }: EditingComponentProps) => {
  const renderButtons = () => {
    return <SaveCancelButtons onSave={onSave} onCancel={onCancel} />;
  };
  const node = getNodeByIdEdit(id);

  useEffect(() => {
    setToolTip(id, () => {
      return renderButtons();
    });
  }, []);
  // title component when editing
  return (
    <div
      className='border-2 border-black relative'
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
    >
      <TitleEdit
        originalValue={node.title}
        onChange={(newTitle) => {
          if (typeof newTitle === 'string')
            changeNodeInfo(id, 'title', newTitle);
        }}
      />
    </div>
  );
};

export default InfoEditProps;
