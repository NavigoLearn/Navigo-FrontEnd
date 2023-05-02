import React, { useEffect, useState } from 'react';
import { divWrapper } from '@components/roadmap/tabs/utils/logic';
import circledot from '@assets/circledot.svg';
import { useStore } from '@nanostores/react';
import tabManagerStore, { setIssues } from '@store/runtime-roadmap/tab-manager';
import cross from '@assets/cross.svg';
import commentsDisplay, {
  setDisplayComments,
} from '@store/runtime-roadmap/comments-display';
import { getTabIssueFlow } from '@typescript/roadmap/tab-logic-flows';
import Comment from '@components/roadmap/tabs/thread/Comment';
import AddComment from '@components/roadmap/tabs/thread/AddComment';
import { fetchIssueCommentsPseudo } from '../../../../api-wrapper/roadmap/tab-data';

const Thread = () => {
  const { issueId } = useStore(tabManagerStore);
  const { comments } = useStore(commentsDisplay);
  const [loaded, setLoaded] = useState(false);
  const [render, setRender] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getTabIssueFlow(issueId).then((issue) => {
      setTitle(issue.title);
      setAuthor(issue.author);
      // setDescription(issue);
    });

    fetchIssueCommentsPseudo(issueId).then((commentsArr) => {
      // fetches the comments on the issue
      setDisplayComments([]);
      setLoaded(true);
    });
  }, []);

  function triggerRerender() {
    fetchIssueCommentsPseudo(issueId).then((commentsArr) => {
      // fetches the comments on the issue
      setDisplayComments([]);
      setLoaded(true);
      setRender((prev) => !prev);
    });
  }

  return (
    <div className='w-full h-full relative flex flex-col '>
      <div className='relative mt-6 w-full flex justify-center'>
        <div className=' font-kanit-text font-semibold text-xl md:text-3xl relative flex flex-col '>
          <div className=' w-full flex justify-center py-2 '>
            <img alt='img circledot' src={circledot} className='h-8 w-8' />
          </div>
          <div className='flex justify-center font-medium font-kanit-text '>
            {title}
          </div>
          <div className=' w-full flex justify-center gap-2 '>
            <div className='text-secondary text-base font-light'>
              by {author}
            </div>
            <div className='text-secondary text-base font-light'>
              #{issueId}
            </div>
          </div>

          <div className='flex justify-center items-center text-secondary text-lg my-4'>
            {description}
          </div>
        </div>
        <button
          type='button'
          className=' w-6 h-6 absolute left-10 top-2 '
          onClick={() => {
            // close tab
            setIssues();
          }}
        >
          <img alt='close tab issue' src={cross} className='w-6 h-6' />
        </button>
      </div>

      <div className='w-full grow overflow-auto'>
        {loaded &&
          comments.map((comment) => (
            <div className='w-full' key={comment.id}>
              {divWrapper(
                <Comment author={comment.author} text={comment.content} />
              )}
            </div>
          ))}
        {loaded &&
          divWrapper(
            <AddComment
              author={author}
              issueId={issueId}
              rerender={() => {
                triggerRerender();
              }}
            />
          )}
      </div>
    </div>
  );
};

export default Thread;
