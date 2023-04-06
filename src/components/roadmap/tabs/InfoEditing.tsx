import React, { useEffect } from 'react';
import Button from '@components/roadmap/tabs/utils/Button';
import { changeInfoTab } from '@store/roadmap_edit';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import { useStore } from '@nanostores/react';
import tabStore, { changeInfoTabProp } from '@store/tabinfo';
import roadmapState from '@store/roadmap_state';

const InfoEditing = () => {
  const { info } = useStore(tabStore);
  const { editing } = useStore(roadmapState);
  useEffect(() => {
    return () => {
      if (editing) {
        changeInfoTab(info.id, info);
      }
      // when the component unmounts, if editing is true, set roadmap tab to current
    };
  }, []);

  console.log(info);
  return (
    <div className=' w-full h-full relative'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <input
          className=' font-kanit-text font-semibold text-4xl border-2 border-gray-200 w-3/4'
          value={info.title}
          onChange={(e) => {
            changeInfoTabProp('title', e.target.value);
          }}
        />
        <div className='mt-2'>
          {editing && (
            <Button
              text={editing ? 'Save' : 'Mark as done'}
              callback={() => {
                if (editing) {
                  changeInfoTab(info.id, info);
                }
                // to be done
              }}
              color='green'
              size='medium'
            />
          )}
        </div>
      </div>
      {divWrapper(
        <textarea
          className='w-full border-2 border-gray-200'
          value={info.description}
          onChange={(e) => {
            changeInfoTabProp('description', e.target.value);
          }}
        />
      )}
      {divWrapper(<div>Visit the following resources to learn more</div>)}
      {divWrapper(
        <div>
          {info.links.map((resource) => {
            return (
              <li key={resource.title} className='list-disc ml-4'>
                <a
                  href={resource.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-main font-semibold font-roboto-text text-lg'
                >
                  {resource.title}
                </a>
              </li>
            );
          })}
        </div>
      )}
      {divWrapper(
        <div className='flex items-center w-full'>
          <div className=' text-secondary font-normal font-roboto-text'>
            Recommended roadmap
          </div>
          <a
            href='https://roadmap.sh/'
            target='_blank'
            rel='noreferrer'
            className=' text-blue-600  text-lg  font-semibold font-roboto-text ml-4'
          >
            {info.roadmap.title}
          </a>
        </div>
      )}
      <div className='flex justify-center w-full'>
        <div className='absolute bottom-32 w-5/6 bg-gray-300 h-[1px] ' />
      </div>
      <div className='absolute bottom-20 w-full max-h-20'>
        {divWrapper(
          <textarea
            className='text-secondary font-normal font-roboto-text w-full h-10 mt-4 max-h-20'
            value={info.additionalInfo}
            onChange={(e) => {
              changeInfoTabProp('additionalInfo', e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InfoEditing;
