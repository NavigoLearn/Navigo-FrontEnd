export type IssueComment = {
  id: string;
  author: string;
  content: string;
  date: string;
};

export interface IssueApi {
  roadmapId: string; // will be converted to bigint eventually
  open: boolean;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
