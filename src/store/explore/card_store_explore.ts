import { atom } from 'nanostores';
import { CardType } from '@type/explore/card';
import {
  fetchDefaultCardsExplore,
  fetchRoadmapCardsProfile,
} from '../../api-wrapper/explore/roadmap-card-data';

const cardsFromApi = atom(
  {} as {
    [value: string]: CardType;
  }
);

/* eslint-disable import/prefer-default-export */

export function addCardToStore(id: string, card: CardType) {
  const original = cardsFromApi.get();
  original[id] = card;
  cardsFromApi.set({ ...original });
}

export async function setRoadmapCardsFromApiExplore() {
  const exploreRoadmaps = await fetchDefaultCardsExplore();
  exploreRoadmaps.forEach((value) => {
    const newValueExplore: CardType = {
      name: value.name,
      author: value.ownerName,
      description: value.description,
      likes: value.likes,
      id: value.id,
    };
    addCardToStore(value.id, newValueExplore);
  });
}

export async function setRoadmapCardsFromApiProfile(
  id: string,
  author: string
) {
  const idArray = await fetchRoadmapCardsProfile(id);
  idArray.forEach((value) => {
    const newValue: CardType = {
      name: value.name,
      author,
      description: value.description,
      likes: 0,
      id: value.id,
      authorId: value.ownerId,
    };
    addCardToStore(value.id, newValue);
  });
}

export function emptyStore() {
  cardsFromApi.set({});
}

export default cardsFromApi;