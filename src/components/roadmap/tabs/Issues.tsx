import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/runtime-roadmap/tab-manager';
import Button from '@components/roadmap/tabs/utils/Button';
import arrowleft from '@assets/arrowleft.svg';
import arrowright from '@assets/arrowright.svg';
import doublearrowleft from '@assets/doublearrowleft.svg';
import doublearrowright from '@assets/doublearrowright.svg';
import Issue from './utils/Issue';
import IssueButton from './utils/IssueButton';
import { divWrapper } from './utils/logic';

const Issues = () => {
  const [page, setPage] = useState(1);
  const { issues } = useStore(tabStore);
  return (
    <div className='w-full h-full relative border-t-black border-t-2 md:border-t-0'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <div className=' font-kanit-text font-semibold text-2xl md:text-4xl  '>
          Issues
        </div>
        <div className='mt-2'>
          <Button
            text='Add issue'
            callback={() => {
              // to be done
            }}
            color='secondary'
            size='small'
          />
        </div>
      </div>
      {divWrapper(<IssueButton />)}
      {divWrapper(
        <div>
          {issues.issues.map((issue) => {
            return (
              <Issue
                key={issue.title}
                title={issue.title}
                author={issue.author}
              />
            );
          })}
        </div>
      )}

      <div className='absolute bottom-14 w-full flex justify-center items-center gap-4'>
        <button
          type='button'
          onClick={() => {
            // go to first page
          }}
        >
          <img src={doublearrowright} alt='' />
        </button>
        <button
          type='button'
          onClick={() => {
            // go to prev page
          }}
        >
          <img src={arrowright} alt='' />
        </button>
        <div className=' text-main font-semibold text-2xl font-kanit-text '>
          {page}
        </div>

        <button
          type='button'
          onClick={() => {
            // go to next page
          }}
        >
          <img src={arrowleft} alt='' />
        </button>
        <button
          type='button'
          onClick={() => {
            // go to last page
          }}
        >
          <img src={doublearrowleft} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Issues;
