import { atom } from 'nanostores';
import { IssueComment } from '@type/roadmap/Issues';
import IssuesDisplay from '@store/runtime-roadmap/issues-display';
import { fetchIssueComments } from '../../api-wrapper/roadmap/issues';

const commentsDisplay = atom({
  comments: [],
} as {
  comments: IssueComment[];
});

export const setDisplayComments = (comments: IssueComment[]) => {
  const original = commentsDisplay.get();
  commentsDisplay.set({
    ...original,
    comments,
  });
};

export async function getCommentsAndSetDisplay(
  roadmapId: string,
  issueId: string
) {
  const { comments } = await fetchIssueComments(roadmapId, issueId);

  setDisplayComments(comments);
}

export default commentsDisplay;
