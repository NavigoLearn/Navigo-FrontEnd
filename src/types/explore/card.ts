export type CardType = {
  name: string;
  author: string;
  authorId: string;
  description: string;
  likes: number;
  id: string;
};

export type RoadmapTypeApi = {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  data: string;
};

export type CardTypeApiResponse = {
  type: 'roadmaps';
  userId: string;
  roadmaps: RoadmapTypeApi[];
};
export type RoadmapTypeApiExplore = {
  id: string;
  name: string;
  description: string;
  likes: number;
  issueCount: number;
  ownerName: string;
  ownerId: string;
};

export type CardTypeApiResponseExplore = {
  success: boolean;
  roadmaps: RoadmapTypeApiExplore[];
};
