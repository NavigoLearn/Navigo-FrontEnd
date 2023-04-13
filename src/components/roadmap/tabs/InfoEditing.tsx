import React, { useEffect, useState, useRef } from 'react';
import roadmapState from '@store/roadmap_state';
import Button from '@components/roadmap/tabs/utils/Button';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import { useStore } from '@nanostores/react';
import tabStore, {
  changeInfoTabProp,
  changeInfoTabLink,
  deleteInfoTabLink,
  addInfoTabLink,
  flipOpen,
} from '@store/runtime/tab-manager';
import { changeTabInfo } from '@typescript/roadmap/roadmap-edit-logic';
import {
  changeTabInfoFlow,
  changeTabInfoPropFlow,
} from '@typescript/roadmap/tab-logic-flows';

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

  const save = useRef(true);
  useEffect(() => {
    return () => {
      if (save.current) {
        changeTabInfo(info.id, info);
      } else {
        // save is canceled
      }
      // when the component unmounts, if editing is true, set roadmap_static tab to current
    };
  }, []);

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
        <div className='mt-2 flex gap-2 items-center '>
          <Button
            text='Cancel'
            callback={() => {
              console.log('save is false');
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
                changeTabInfo(info.id, info);
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
          {info.links.map((resource, index) => {
            return (
              // eslint-disable-next-line
              <div className='flex gap-2 my-2' key={`${index}`}>
                <input
                  className='text-main font-semibold font-roboto-text text-lg border-2 border-gray-100'
                  value={resource.title}
                  onChange={(e) => {
                    changeInfoTabLink(index, 'title', e.target.value);
                  }}
                />
                <input
                  className=' text-blue-400 font-light font-roboto-text text-base border-2 border-gray-100'
                  value={resource.link}
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
          <div className='flex gap-2 my-2'>
            <input
              className='text-main font-semibold font-roboto-text text-lg border-2 border-gray-100'
              value={newLink.title}
              onChange={(e) => {
                setNewLink({ ...newLink, title: e.target.value });
              }}
            />
            <input
              className=' text-blue-400 font-light font-roboto-text text-base border-2 border-gray-100'
              value={newLink.link}
              onChange={(e) => {
                setNewLink({ ...newLink, link: e.target.value });
              }}
            />
            <button
              type='button'
              className=' text-sm text-placeholder font-roboto-text font-light'
              onClick={() => {
                // add a new link to the array
                addInfoTabLink({ ...newLink });
                setNewLink({ title: '', link: '' });
              }}
            >
              add
            </button>
          </div>
        </div>
      )}
      <div className='flex justify-center w-full'>
        <div className='absolute bottom-32 w-5/6 bg-gray-300 h-[1px] ' />
      </div>
      <div className='absolute bottom-20 w-full max-h-20'>
        {divWrapper(
          <textarea
            className='text-secondary font-normal font-roboto-text w-full h-10 mt-4 max-h-20 border-2 border-gray-200'
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
