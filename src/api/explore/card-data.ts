import { CardType } from '@type/explore/card';
import { networkLatency } from '../roadmap/params';

const data: { [value: string]: CardType } = {
  '1': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 689,
    id: 1,
  },
  '2': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 0,
    id: 2,
  },
  '3': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 311143,
    id: 3,
  },
  '4': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 67,
    id: 3,
  },
  '5': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 313,
    id: 3,
  },
  '6': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 31114342,
    id: 3,
  },
  '7': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 311143123,
    id: 3,
  },
  '8': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 7543,
    id: 3,
  },
  '9': {
    name: 'React',
    madeby: 'RusBoss',
    description:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    noLikes: 2132,
    id: 3,
  },
};

export const fetchCardData = async (id: string) => {
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

export const fetchDefaultCardsProfile = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['1', '2', '3', '7', '8', '9']);
    }, networkLatency);
  });
};
