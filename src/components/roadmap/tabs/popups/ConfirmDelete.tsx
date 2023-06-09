import React from 'react';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import { saveEditingProtocol } from '@typescript/roadmap/utils2';
import { setConfirmDelete, setConfirmSave } from '@store/roadmap/popup';
import { deleteRoadmap } from '@src/api-wrapper/roadmap/roadmaps';
import { getRoadmapId } from '@store/roadmap/data/roadmap_state';
import { dispatchAnalyticsEvent } from '@store/misc/analytics';

const ConfirmDelete = () => {
  return (
    <div className=' relative z-40 rounded-lg w-full  md:w-[600px] h-[200px] shadow-standard bg-white pointer-events-auto '>
      {divWrapper(
        <div className='mt-4 text-main font-semibold text-lg text-center'>
          Are you sure you want to delete this roadmap? :(((
        </div>
      )}
      <div className='w-full absolute bottom-8 flex justify-center gap-4'>
        <button
          type='button'
          className='bg-main text-white rounded-xl px-6 py-1 bg-primary font-medium '
          onClick={() => {
            dispatchAnalyticsEvent('roadmapInteraction', {
              actionType: 'Delete Roadmap',
            });
            deleteRoadmap(getRoadmapId());
            setConfirmDelete();
            window.location.href = '/profile';
          }}
        >
          Delete
        </button>
        <button
          type='button'
          className='text-secondary font-medium text-sm'
          onClick={() => {
            setConfirmDelete();
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
