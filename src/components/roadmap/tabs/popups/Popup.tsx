import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import popup from '@store/popup';
import Report from '@components/roadmap/tabs/popups/Report';
import ConfirmSave from '@components/roadmap/tabs/popups/ConfirmSave';
import ConfirmCancel from '@components/roadmap/tabs/popups/ConfirmCancel';
import { divWrapper } from '../utils/logic';

const Popup = () => {
  const { type } = useStore(popup);
  return (
    <div className='absolute top-0 right-0 h-screen w-screen flex justify-center items-center z-10l bg-transparent pointer-events-none'>
      {type === 'report' && <Report />}
      {type === 'confirmSave' && <ConfirmSave />}
      {type === 'confirmCancel' && <ConfirmCancel />}
    </div>
  );
};

export default Popup;