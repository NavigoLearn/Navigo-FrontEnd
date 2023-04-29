import React, { useEffect } from 'react';
import { NonEditingComponentProps } from '@type/roadmap/components';
import { addNodeNew } from '@typescript/roadmap/roadmap-edit-logic-decorated';
import { setToolTip } from '@store/runtime/miscParams';
import { setInfoFlow } from '@typescript/roadmap/tab-logic-flows';
import { getNodeByIdEdit } from '@typescript/roadmap/roadmap-edit-logic';
import { isNodeInfoProps } from '@type/roadmap/typecheckers';
import ButtonsView from '@components/roadmap/nodes/misc/ButtonsView';
import plus from '@assets/plus.svg';
import edit from '@assets/edit.svg';

const InfoNonEditProps = <T,>({
  data,
  id,
  setCb: setEdit,
}: NonEditingComponentProps) => {
  const renderButtons = () => {
    return <ButtonsView id={id} type='Info' level={data.level} />;
  };

  useEffect(() => {
    setToolTip(id, () => {
      return renderButtons();
    });
  }, []);

  return (
    <div className=' flex justify-between w-[224px] '>
      <button
        type='button'
        className='w-10 h-10 flex justify-center items-center'
        onClick={() => {
          addNodeNew(id, 'Info');
        }}
      >
        <img src={plus} width='16px' alt='add' />
      </button>
      <button
        type='button'
        className={` text-sm font-semibold flex-grow py-1  bg-white `}
        onClick={() => {
          // tab changing logic
          setInfoFlow(data.tabId);
        }}
      >
        <div
          className={` h-full font-roboto-text  w-full flex justify-center items-center text-md`}
        >
          {data.title}
        </div>
      </button>
      <button
        type='button'
        className='w-10 h-10 flex justify-center items-center'
        onClick={() => {
          setEdit();
        }}
      >
        <img src={edit} width='20px' alt='edit' />
      </button>
    </div>
  );
};

export default InfoNonEditProps;
