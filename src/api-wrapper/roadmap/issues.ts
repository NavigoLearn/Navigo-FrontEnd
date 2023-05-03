import { IssueApi } from '@type/roadmap/Issues';

export async function postCreateNewIssue(roadmapId: string, issue: IssueApi) {
  const response = await fetch(`/api/roadmaps/${roadmapId}/issues/create`, {
    method: 'POST',
    body: JSON.stringify({
      issue,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

export async function getIssue(roadmapId: string, issueId: string) {
  const response = await fetch(`/api/roadmaps/${roadmapId}/issues/${issueId}`);
  return response.json();
}
