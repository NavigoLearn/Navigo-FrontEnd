import { atom } from 'nanostores';
import { IssueComment } from '@type/roadmap/Issues';
import IssuesDisplay from '@store/roadmap/display/issues-display';
import { processUserUrlPic } from '@typescript/user/misc';
import { fetchIssueComments } from '@src/api-wrapper/roadmap/issues';
import { fetchGetMiniProfileDataById } from '@src/api-wrapper/user/user';

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
  const newComments: IssueComment[] = [];
  await Promise.all(
    comments.map(async (comment): Promise<IssueComment> => {
      // fetch user mini for name and profile picture
      const userMini = await fetchGetMiniProfileDataById(comment.userId);
      const newComment: IssueComment = {
        id: comment.id,
        content: comment.content,
        date: comment.createdAt,
        profilePictureUrl: processUserUrlPic(userMini.profilePictureUrl),
        author: userMini.name,
        authorId: comment.userId,
      };
      newComments.push(newComment);
      return newComment;
    })
  );
  // formats the comments from api to the format to normal format
  setDisplayComments(newComments);
}

export default commentsDisplay;
