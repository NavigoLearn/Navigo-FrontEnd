import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import roadmapVisitData from '@store/roadmap/data/roadmap-visit-data';
import loggedUser from "@store/user/logged-user";
import { fetchDeleteComment } from "@src/api-wrapper/roadmap/issues";

type CommentProps = {
  id: string;
  author: string;
  authorId: string;
  text: string;
  date: string;
  issueId: string;
  urlPic: string;
};
const Comment = ({ id, author, authorId, text, date, issueId, urlPic }: CommentProps) => {
  const { visitorIsOwner, roadmapId } = useStore(roadmapVisitData);
  const [ deleted, setDeleted ] = useState(false);
  const userId = loggedUser.get().userId
  const gotPermission = userId == authorId || visitorIsOwner;

  return (
    <div className={`w-full relative ${deleted ? 'hidden' : ''}`}>
      <div className='absolute -left-10 w-8 h-8 '>
        <img draggable="false"
          alt='img circledot'
          src={urlPic}
          className='w-full h-full rounded-full border-[1px] border-black'
        />
      </div>
      <div className='border-2 border-gray-500 flex relative gap-4 rounded-full py-0.5 relative z-10 bg-[#E3E6EB] '>
        <div className='text-main font-semibold ml-5'>{author}</div>
        <div className='text-secondary font-light'>
          commented on {date.toString()}
        </div>
      </div>
      <div className='border-2 border-gray-400 -mt-5 pt-7 pb-3 px-2 border-t-0 rounded-lg relative z-0  '>
        {text}
      </div>
      {gotPermission && (
        <button
          type='button'
          className='absolute right-10 text-red-400 hover:text-red-600 text-lg '
          onClick={() => {
            fetchDeleteComment(roadmapId, issueId, id).then((res) => {
              if(res) setDeleted(true);
            });
          }}
        >
          delete
        </button>
      )}
    </div>
  );
};

export default Comment;
