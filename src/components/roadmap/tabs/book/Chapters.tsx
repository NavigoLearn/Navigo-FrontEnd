import React from 'react';

type ChaptersProps = {
  setChapter: (chapter: string) => void;
};

const Chapter = ({ chapter, setChapter }: any) => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <div className='w-20 bg-gray-400 h-[1px] ' />
      <button
        type='button'
        className='text-lg text-secondary font-semibold font-kanit-text transition-all hover:text-main'
        onClick={() => {
          setChapter(chapter);
        }}
      >
        {chapter}
      </button>
      <div className='w-20 bg-gray-400 h-[1px] ' />
    </div>
  );
};

const Chapters = ({ setChapter }: ChaptersProps) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-start w-full mt-6'>
      <div className='text-main font-bold font-kanit-text text-xl mb-10 '>
        Chapters
      </div>
      <Chapter chapter='Introduction' setChapter={setChapter} />
      <Chapter chapter='About Editing' setChapter={setChapter} />
      <Chapter chapter='About Nodes' setChapter={setChapter} />
      {/* <Chapter chapter='About Tabs' setChapter={setChapter} /> */}
    </div>
  );
};

export default Chapters;
