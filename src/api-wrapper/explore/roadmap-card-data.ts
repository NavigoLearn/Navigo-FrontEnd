import {
  CardType,
  RoadmapTypeApi,
  CardTypeApiResponse,
} from '@type/explore/card';
import { networkLatency } from '../roadmap/params';

const data: { [value: string]: CardType } = {
  '1': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 689,
    id: '1',
  },
  '2': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 0,
    id: '2',
  },
  '3': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 311143,
    id: '3',
  },
  '4': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 67,
    id: '4',
  },
  '5': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 313,
    id: '5',
  },
  '6': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 31114342,
    id: '6',
  },
  '7': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 311143123,
    id: '7',
  },
  '8': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 7543,
    id: '8',
  },
  '9': {
    name: 'React',
    author: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    likes: 2132,
    id: '9',
  },
};

export const fetchCardData = async (id: string) => {
  //
};

export const fetchCardDataPseudo = async (id: string) => {
  return new Promise<CardType>((resolve) => {
    setTimeout(() => {
      resolve(data[id]);
    }, networkLatency);
  });
};
export const fetchDefaultCards = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    }, networkLatency);
  });
};

export const fetchRoadmapCardsProfile = async (
  id: string
): Promise<RoadmapTypeApi[]> => {
  // fetches from the api the cards
  const fetchRoute = `/api/users/${id}/roadmaps`;
  const response = await fetch(fetchRoute, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const dataJson: CardTypeApiResponse = await response.json();
  return dataJson.roadmaps;
};

export const fetchDefaultCardsProfilePseudo = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['1', '2', '3', '7', '8', '9']);
    }, networkLatency);
  });
};
