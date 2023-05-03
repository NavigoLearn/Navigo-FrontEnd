import React, { useState } from 'react';
import roadmapState from '@store/roadmap_state';
import { fetchPostNewComment } from '../../../../api-wrapper/roadmap/issues';

const Menu = () => {
  return (
    <div className='flex gap-10 justify-start'>
      <button
        type='button'
        className='px-4 py-2 bg-primary text-white rounded-lg rounded-b-none '
      >
        Write
      </button>
    </div>
  );
};

type AddCommentProps = {
  issueId: string;
  author: string;
  rerender: () => void;
};
const AddComment = ({ issueId, author, rerender }: AddCommentProps) => {
  const [text, setText] = useState('');

  return (
    <div className='w-full rounded-lg border-2 border-blue-600 relative p-6 mt-10'>
      <div className='absolute -top-10 '>
        <Menu />
      </div>
      <div className='w-full h-full px-4 py-4 rounded-lg pb-2 bg-[#EAEFF2]'>
        <textarea
          className='w-full h-full outline-none bg-[#EAEFF2] '
          value={text}
          placeholder='Write a comment here'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='button'
          className='bg-primary rounded-xl mt-7  text-white font-medium text-base p-4 py-2'
          onClick={() => {
            // posts a comment
            fetchPostNewComment(roadmapState.get().id, issueId, text).then(
              () => {
                rerender();
              }
            );
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
