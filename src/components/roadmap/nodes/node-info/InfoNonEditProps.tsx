import React, { useEffect } from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { addNodeNew } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { setToolTip } from '@store/runtime/miscParams';
import DropdownType from '@components/roadmap/nodes/edit-logic-modules/DropdownType';

const Buttons = ({ id }: { id: string }) => {
  return (
    <div className='flex justify-between pointer-events-auto'>
      <div>add Node</div>
      <DropdownType id={id} type='Info' />
      <div>Edit Node</div>
    </div>
  );
};

const InfoNonEditProps = <T,>({
  value,
  id,
  setCb: setEdit,
}: NonEditingComponentProps<{ title: string }>) => {
  const renderButtons = () => {
    return <Buttons id={id} />;
  };

  useEffect(() => {
    setToolTip(id, () => {
      return renderButtons();
    });
  }, []);

  return (
    <div className=' flex justify-between '>
      <button
        type='button'
        className='w-10 h-10 border-black border-2'
        onClick={() => {
          addNodeNew(id, 'Info');
        }}
      >
        add
      </button>
      <button
        type='button'
        className={` text-sm p-2 font-semibold   w-20    `}
        onClick={() => {
          // tab changing logic
        }}
      >
        <div
          className={` h-full font-roboto-text  w-full flex justify-center items-center text-lg`}
        >
          {value.title}
        </div>
      </button>
      <button
        type='button'
        className='w-10 h-10 border-black border-2'
        onClick={() => {
          setEdit();
        }}
      >
        edit
      </button>
    </div>
  );
};

export default InfoNonEditProps;
