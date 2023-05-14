import React, { useEffect, useState, useRef } from 'react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import Button from '@components/roadmap/tabs/utils/Button';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import { useStore } from '@nanostores/react';
import tabStore, {
  changeInfoTabProp,
  changeInfoTabLink,
  deleteInfoTabLink,
  addInfoTabLink,
  flipOpen,
} from '@store/roadmap/display/tab-manager';
import { diffSaveTabInfo } from '@store/roadmap/cache/diff-tabs';
import cross from '@assets/cross.svg';
import { capStringLen } from '@typescript/roadmap/utils2';

type link = {
  title: string;
  link: string;
};

const InfoEditing = () => {
  const { info } = useStore(tabStore);
  const { editing } = useStore(roadmapState);

  const [newLink, setNewLink] = useState<link>({
    title: '',
    link: '',
  });

  function changeTabInfo() {
    diffSaveTabInfo(info.id, info);
  }

  const save = useRef(true);
  useEffect(() => {
    return () => {
      if (save.current) {
        // saves the diffs to the store (compared to the cached version)
        changeTabInfo();
      } else {
        // save is canceled
      }
      // when the component unmounts, if editing is true, set roadmap_static tab to current
    };
  }, []);

  return (
    <div className=' w-full h-full relative md:border-t-black md:border-t-2'>
      {divWrapper(
        <div className='flex justify-between'>
          <button
            type='button'
            className=' h-8 w-8'
            onClick={() => {
              flipOpen();
            }}
          >
            <img draggable='false' src={cross} className='w-6 h-6' />
          </button>
        </div>
      )}
      <div className='w-5/6 flex justify-between items-center mx-auto mt-6 flex-col '>
        <input
          className='text-xl font-kanit-text font-semibold h-10 md:text-3xl border-2 border-gray-300 rounded-md shadow-sm w-full flex'
          value={info.title}
          onChange={(e) => {
            const newVal = capStringLen(e.target.value, 20);
            changeInfoTabProp('title', newVal);
          }}
        />
        <div className='mt-2 flex gap-2 items-center justify-center '>
          <Button
            text='Cancel'
            callback={() => {
              save.current = false;
              flipOpen();
            }}
            color='primary'
            size='small'
          />
          <Button
            text='Save'
            callback={() => {
              if (editing) {
                save.current = true;
                changeTabInfo();
                flipOpen();
              }
              // to be done
            }}
            color='green'
            size='small'
          />
        </div>
      </div>
      {divWrapper(
        <textarea
          className='w-full border-2 h-36 border-gray-300 rounded-md shadow-sm text-sm md:text-lg'
          placeholder='Description...'
          value={info.description}
          onChange={(e) => {
            const newVal = capStringLen(e.target.value, 100);
            changeInfoTabProp('description', newVal);
          }}
        />
      )}
      {divWrapper(<div>Visit the following resources to learn more</div>)}
      {divWrapper(
        <div className='w-full'>
          {info.links.map((resource, index) => {
            return (
              // eslint-disable-next-line
              <div className='flex-col gap-2 my-2' key={`${index}`}>
                <input
                  className='text-main flex font-semibold font-roboto-text text-sm md:text-lg border-2 rounded-md border-gray-300 w-full'
                  value={resource.title}
                  placeholder='Resource Title'
                  onChange={(e) => {
                    const newVal = capStringLen(e.target.value, 20);
                    changeInfoTabLink(index, 'title', newVal);
                  }}
                />
                <input
                  className=' text-blue-400 flex mt-2 font-light font-roboto-text text-sm md:text-base border-2 rounded-md border-gray-300 w-full'
                  value={resource.link}
                  placeholder='https://example.com'
                  onChange={(e) => {
                    changeInfoTabLink(index, 'link', e.target.value);
                  }}
                />
                <button
                  type='button'
                  className=' text-sm text-placeholder font-roboto-text font-light'
                  onClick={() => {
                    deleteInfoTabLink(index);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
          <div className='flex gap-2 my-2 w-full justify-center'>
            <Button
              text='Add new link'
              callback={() => {
                addInfoTabLink({ ...newLink });
                setNewLink({ title: '', link: '' });
              }}
              color='primary'
              size='small'
            />
          </div>
        </div>
      )}
      <hr className='bg-gray-300 flex mt-2 w-5/6 justify-center mx-auto border-1' />
      {/* <div className='flex justify-center w-full'>
        <div className='absolute bottom-32 w-5/6 bg-gray-300 h-[1px] ' />
      </div> */}
      <div className='w-full max-h-36'>
        {divWrapper(
          <textarea
            className='text-secondary -translate-y-6 font-normal font-roboto-text w-full h-12 mt-4 max-h-20 border-2 rounded-md shadow-sm border-gray-300 md:h-36'
            placeholder='Additional Info...'
            value={info.additionalInfo}
            onChange={(e) => {
              const newVal = capStringLen(e.target.value, 100);
              changeInfoTabProp('additionalInfo', newVal);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InfoEditing;
