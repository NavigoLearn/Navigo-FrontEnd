import React, { useEffect } from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { addNodeNew } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { setToolTip } from '@store/runtime/miscParams';
import { setInfoFlow } from '@typescript/roadmap/tab-logic-flows';
import { getNodeByIdEdit } from '@typescript/roadmap/roadmap-edit-logic';
import { isNodeInfoProps } from '@type/roadmap/typecheckers';
import ButtonsView from '@components/roadmap/nodes/misc/ButtonsView';

const InfoNonEditProps = <T,>({
  id,
  setCb: setEdit,
}: NonEditingComponentProps) => {
  const value = getNodeByIdEdit(id); // gets the data locally
  const renderButtons = () => {
    return <ButtonsView id={id} type='Info' />;
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

          if (isNodeInfoProps(value)) {
            setInfoFlow(value.tabId);
          }
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
