import { atom } from 'nanostores';
import { IssueComment } from '@type/roadmap/Issues';

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

export default commentsDisplay;
