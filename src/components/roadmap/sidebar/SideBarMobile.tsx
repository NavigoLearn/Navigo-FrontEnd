import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import buttonsEdit from '@components/roadmap/sidebar/buttons-edit';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import buttonsView from './buttons-view';

const SideBarMobile = ({ isCreate }: { isCreate: string }) => {
  const { editing } = useStore(roadmapState);
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
  }, []);

  return (
    <div className='flex justify-start pl-4 w-full h-16 absolute -top-16  pointer-events-none '>
      <div />
      <ul className='flex gap-8 '>
        {hydrate &&
          !editing &&
          !isCreate &&
          buttonsView.map((button) => {
            return (
              <li key={button.id} className='flex items-center text-center'>
                <button
                  type='button'
                  className=' pointer-events-auto w-6 h-6'
                  onClick={button.clickHandler}
                >
                  <img src={button.cIcon} alt='' className=' w-6 h-6' />
                </button>
              </li>
            );
          })}
        {hydrate &&
          editing &&
          !isCreate &&
          buttonsEdit.map((button) => {
            return (
              <li key={button.id} className='flex items-center text-center'>
                <button
                  type='button'
                  className=' pointer-events-auto w-6 h-6'
                  onClick={button.clickHandler}
                >
                  <img src={button.cIcon} alt='' className=' w-6 h-6' />
                </button>
              </li>
            );
          })}
        {hydrate &&
          isCreate &&
          buttonsCreate.map((button) => {
            return (
              <li key={button.id} className='flex items-center text-center'>
                <button
                  type='button'
                  className=' pointer-events-auto w-6 h-6'
                  onClick={button.clickHandler}
                >
                  <img src={button.cIcon} alt='' className=' w-6 h-6' />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBarMobile;
