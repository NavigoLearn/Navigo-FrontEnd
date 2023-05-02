import React, { useEffect } from 'react';

const SaveCancelButtons = ({
  onSave,
  onCancel,
}: {
  onSave: () => void;
  onCancel: () => void;
}) => {
  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        onSave();
      }
    });
  }, []);

  return (
    <div className='flex pointer-events-auto gap-3 items-center '>
      <button
        type='button'
        className='w-10 h-10 text-base font-roboto-text font-semibold text-secondary hover:text-main transition-all '
        onClick={() => {
          onSave();
        }}
      >
        save
      </button>
      <button
        type='button'
        className='w-10 h-10 text-sm font-roboto-text text-placeholder hover:text-secondary transition-all'
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
