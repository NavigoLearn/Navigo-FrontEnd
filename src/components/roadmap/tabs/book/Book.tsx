import React, { useState } from 'react';
import Chapters from '@components/roadmap/tabs/book/Chapters';
import AboutTabs from '@components/roadmap/tabs/book/AboutTabs';
import AboutNodes from '@components/roadmap/tabs/book/AboutNodes';
import AboutEditing from '@components/roadmap/tabs/book/AboutEditing';
import Introduction from '@components/roadmap/tabs/book/Introduction';
import NavBook from '@components/roadmap/tabs/book/NavBook';

const Book = () => {
  const [select, setSelect] = useState('chapters');
  const mapping = {
    chapters: Chapters,
    'About Tabs': AboutTabs,
    'About Nodes': AboutNodes,
    'About Editing': AboutEditing,
    Introduction,
  };

  const Render = mapping[select];
  return (
    <div className='h-full w-full relative flex flex-col '>
      <NavBook setSelect={setSelect} />
      <div className=' w-full grow overflow-auto '>
        <Render setChapter={setSelect} />
      </div>
    </div>
  );
};

export default Book;
