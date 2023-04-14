import React from 'react';
import Button from '@components/roadmap/tabs/utils/Button';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import { useStore } from '@nanostores/react';
import tabStore from '@store/runtime/tab-manager';

const InfoView = () => {
  const { info } = useStore(tabStore);
  return (
    <div className=' w-full h-full relative'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <div className=' font-kanit-text font-semibold text-4xl  '>
          {info.title}
        </div>
        <div className='mt-2'>
          <Button
            text='Mark as done'
            callback={() => {
              // to be done
            }}
            color='secondary'
            size='small'
          />
        </div>
      </div>
      {divWrapper(info.description)}
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
      <div className='flex justify-center w-full'>
        <div className='absolute bottom-32 w-5/6 bg-gray-300 h-[1px] ' />
      </div>
      <div className='absolute bottom-20 w-full'>
        {divWrapper(
          <div>
            <div className='text-secondary font-normal font-roboto-text'>
              {info.additionalInfo}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoView;
