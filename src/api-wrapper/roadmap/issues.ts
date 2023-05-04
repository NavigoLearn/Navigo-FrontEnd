import {
  IssueApi,
  IssueApiGet,
  IssueCommentApiGet,
} from '@type/roadmap/Issues';

export async function fetchPostNewIssue(roadmapId: string, issue: IssueApi) {
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

export async function fetchIssue(roadmapId: string, issueId: string) {
  const response = await fetch(`/api/roadmaps/${roadmapId}/issues/${issueId}`);
  return response.json();
}

export async function fetchIssues(roadmapId: string): Promise<IssueApiGet[]> {
  const response = await fetch(`/api/roadmaps/${roadmapId}/issues`);
  const responseData = await response.json();
  return responseData.issues;
}

export async function fetchIssueComments(
  roadmapId: string,
  issueId: string
): Promise<{ comments: IssueCommentApiGet[] }> {
  const response = await fetch(
    `/api/roadmaps/${roadmapId}/issues/${issueId}/comments/`
  );
  return response.json();
}

export async function fetchPostNewComment(
  roadmapId: string,
  issueId: string,
  content: string
) {
  const response = await fetch(
    `/api/roadmaps/${roadmapId}/issues/${issueId}/comments/create`,
    {
      method: 'POST',
      body: JSON.stringify({
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function fetchDeleteComment(
  roadmapId: string,
  issueId: string,
  commentId: string
) {
  const response = await fetch(
    `/api/roadmaps/${roadmapId}/issues/${issueId}/comments/${commentId}/delete`,
    {
      method: 'POST',
    }
  );
  return response.json();
}
