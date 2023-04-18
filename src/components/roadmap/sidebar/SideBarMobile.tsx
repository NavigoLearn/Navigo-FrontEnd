import React from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap_state';
import buttonsEdit from '@components/roadmap/sidebar/buttons-edit';
import buttonsView from './buttons-view';

const SideBarMobile = () => {
  const { editing } = useStore(roadmapState);

  return (
    <div className='flex justify-start pl-4 w-full h-16 absolute -top-16  pointer-events-none '>
      <div />
      <ul className='flex gap-8 '>
        {!editing &&
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
        {editing &&
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
      </ul>
    </div>
  );
};

export default SideBarMobile;
