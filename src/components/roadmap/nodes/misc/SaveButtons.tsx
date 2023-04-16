import React from 'react';

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

export default SaveCancelButtons;
