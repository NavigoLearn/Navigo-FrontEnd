import React from 'react';

type CommentProps = {
  author: string;
  text: string;
};
const Comment = ({ author, text }: CommentProps) => {
  return (
    <div className='w-full relative '>
      <div className='border-2 border-gray-500 flex gap-4 rounded-full py-0.5 relative z-10 bg-[#E3E6EB] '>
        <div className='text-main font-semibold ml-5'>{author}</div>
        <div className='text-secondary font-light'>commented</div>
      </div>
      <div className='border-2 border-gray-400 -mt-5 pt-7 pb-3 px-2 border-t-0 rounded-lg relative z-0  '>
        {text}
      </div>
    </div>
  );
};

export default Comment;
