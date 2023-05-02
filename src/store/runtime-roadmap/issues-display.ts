import { atom } from 'nanostores';
import { IssuePreview } from '@type/roadmap/tab-manager';

const IssuesDisplay = atom({
  issues: [],
} as {
  issues: IssuePreview[];
});

export const setDisplayIssues = (issues: IssuePreview[]) => {
  const original = IssuesDisplay.get();
  IssuesDisplay.set({
    ...original,
    issues,
  });
};

export default IssuesDisplay;
