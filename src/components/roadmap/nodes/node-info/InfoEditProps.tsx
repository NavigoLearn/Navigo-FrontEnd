import React, { useCallback, useRef, useEffect } from 'react';
import { EditingComponentProps } from '@type/roadmap/components';
import { setToolTip } from '@store/runtime/miscParams';
import { getTriggerTooltip } from '@store/runtime/rerenderTriggers';

const SaveCancelButtons = ({
  onSave,
  onCancel,
}: {
  onSave: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className='flex pointer-events-auto '>
      <button
        type='button'
        className='w-10 h-10 border-black border-2'
        onClick={() => {
          onSave();
        }}
      >
        save
      </button>
      <button
        type='button'
        className='w-10 h-10 border-black border-2'
        onClick={() => {
          onCancel();
        }}
      >
        cancel
      </button>
    </div>
  );
};

// only concerned with the title
const InfoEditProps = <T,>({
  id,
  value,
  onChange,
  onSave,
  onCancel,
}: EditingComponentProps<{
  title: string;
}>) => {
  const renderButtons = () => {
    return <SaveCancelButtons onSave={onSave} onCancel={onCancel} />;
  };

  useEffect(() => {
    setToolTip(id, () => {
      return renderButtons();
    });
  }, []);
  // title component when editing
  return (
    <div className='border-2 border-black relative'>
      <input
        className={` pointer-events-auto h-8 font-roboto-text  w-full flex justify-center items-center  text-center border-2 border-gray-200 outline-none `}
        value={value.title}
        onChange={(e) => {
          onChange({
            title: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default InfoEditProps;
