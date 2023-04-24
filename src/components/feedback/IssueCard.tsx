import React, { useState } from 'react';
import issues from 'src/types/feedback/issues';

const IssueCard = () => {
  return (
    <ul className='grid grid-cols-2 gap-x-9 gap-y-11 xl:grid-cols-3 mx-4'>
      {issues.map((issue) => {
        return (
          <li key={issue.id} className='flex justify-center items-center'>
            <div className='bg-white w-[512px] sm:w-96 h-40 sm:h-52 relative shadow-standard rounded-lg 2xl:w-[460px] 2xl:h-64'>
              <div className='flex justify-center mt-3'>
                <h1 className='font-kanit-text font-medium text-xl sm:text-xl flex 2xl:text-xl'>
                  {issue.title}
                </h1>
              </div>
              <div className='box-border h-[85px] w-full px-6 py-5 text-xs text-center sm:h-[120px] sm:text-sm sm:p-8 font-kanit-text font-normal text-secondary 2xl:h-36 2xl:text-base 2xl:py-10 2xl:px-9'>
                <p className='line-clamp-3'>{issue.description}</p>
              </div>
              <div className='flex justify-end items-center relative mr-6'>
                <a
                  href={issue.link}
                  className='px-8 py-2 font-kanit-text font-medium text-end bg-black text-white rounded-full hover:underline hover:underline-offset-2'
                >
                  See discussion
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default IssueCard;
