import React, { useState } from 'react';
import issues from 'src/types/feedback/issues';

const IssuesList = () => {
  return (
    <ul className='grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-11 xl:grid-cols-3 xl:mx-6 2xl:mx-56'>
      {issues.map((issue) => {
        return (
          <li key={issue.id} className='flex justify-center items-center'>
            <div className='bg-white w-64 sm:w-96 h-40 sm:h-52 relative shadow-standard rounded-lg 2xl:w-[460px] 2xl:h-64'>
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
                  className='py-1 px-3 font-kanit-text font-medium text-end bg-black text-white rounded-full transition-all border-2 border-none  hover:bg-transparent hover:text-black select-none'
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

export default IssuesList;
