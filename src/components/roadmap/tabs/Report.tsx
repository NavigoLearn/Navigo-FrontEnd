import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import popup from '@store/popup';
import { divWrapper } from './utils/logic';

const Report = () => {
  const { type } = useStore(popup);
  const [text, setText] = useState('');
  return (
    <div className='absolute top-0 right-0 h-screen w-screen flex justify-center items-center z-10l bg-transparent pointer-events-none'>
      {type === 'report' ? (
        <div className=' relative z-50 w-[600px] h-[300px]  shadow-standard bg-white pointer-events-auto'>
          <div className='flex justify-center items-start mt-6  font-kanit-text font-semibold text-2xl'>
            Report roadmap
          </div>
          {divWrapper(
            <div className=' bg-gray-300 shadow-standard w-full h-32 rounded-2xl p-2'>
              <input
                className='w-full h-full bg-transparent border-none outline-none text-main align-top text-left py-1'
                placeholder='write issue here'
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
          )}
          <div className='w-full flex justify-center '>
            <button
              className=' w-28 h-10 text-white font-semibold font-roboto-text rounded-2xl mt-8 bg-red-600'
              type='submit'
            >
              Report
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Report;
