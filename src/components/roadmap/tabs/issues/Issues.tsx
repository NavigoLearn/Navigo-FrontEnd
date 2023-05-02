import React, { useState, useEffect } from 'react';
import roadmapState from '@store/roadmap_state';
import { useStore } from '@nanostores/react';
import tabStore, {
  flipOpen,
  setAddIssue,
} from '@store/runtime-roadmap/tab-manager';
import Button from '@components/roadmap/tabs/utils/Button';
import cross from '@assets/cross.svg';
import issuesDisplay, {
  setDisplayIssues,
} from '@store/runtime-roadmap/issues-display';
import PageArrows from '@components/roadmap/tabs/issues/PageArrows';
import Issue from './Issue';
import IssueButton from '../utils/IssueButton';
import { divWrapper } from '../utils/logic';

const Issues = () => {
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const { issues } = useStore(issuesDisplay);
  const [idsArr, setIdsArr] = useState<string[]>([]);
  const issuePerPage = 5;

  useEffect(() => {
    // fetches and caches all issues
    // fetchAllIssuesIds(roadmapState.get().id).then((ids) => {
    //   setIdsArr(ids);
    // });
  }, []);

  useEffect(() => {
    // fetchIssuesPage(idsArr, page, issuePerPage).then((issuesArr) => {
    //   setDisplayIssues(issuesArr);
    //   setLoaded(true);
    // });
  }, [page, idsArr]);

  return (
    <div className='w-full h-full relative flex flex-col border-t-black border-t-2 md:border-t-0'>
      <div className='w-full  flex justify-center items-center mx-8 mt-6 flex-shrink-0 '>
        <div className=' font-kanit-text font-semibold text-2xl md:text-4xl  '>
          Issues
        </div>
        <div className='mt-2 absolute right-10'>
          <Button
            text='Add issue'
            callback={() => {
              setAddIssue();
            }}
            color='secondary'
            size='small'
          />
        </div>

        <button
          type='button'
          className='mt-2 w-6 h-6 absolute left-10'
          onClick={() => {
            // close tab
            flipOpen();
          }}
        >
          <img alt='close tab issue' src={cross} className='w-6 h-6' />
        </button>
      </div>
      {divWrapper(<IssueButton />)}
      <div className='grow w-full overflow-auto '>
        {divWrapper(
          <div className=' w-full  '>
            <div>
              {loaded &&
                issues.map((issue) => {
                  return (
                    <Issue
                      key={issue.title}
                      id={issue.id}
                      title={issue.title}
                      author={issue.author}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <PageArrows
        decPage={() => {
          if (page <= 1) return;
          setPage((prev) => prev - 1);
        }}
        incPage={() => {
          if (page >= Math.ceil(idsArr.length / issuePerPage)) return;
          setPage((prev) => prev + 1);
        }}
        toBegin={() => {
          setPage(1);
        }}
        toEnd={() => {
          setPage(Math.ceil(idsArr.length / issuePerPage));
        }}
        page={page}
      />
    </div>
  );
};

export default Issues;