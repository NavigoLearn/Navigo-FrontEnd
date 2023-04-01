import { atom } from 'nanostores';

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  quote: string;
  link: string;
  description: string;
  followers: number;
  following: number;
  BIO: string;
  completedRoadmaps: number;
  createdRoadmaps: number;
  roadmapProgressData: string[{
    roadmapId: string;
    roadmapName: string;
    roadmapDescription: string;
    roadmapLikes: number;
  }];
};
const user = atom({} as User);
export default user;
