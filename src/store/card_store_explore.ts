import { atom } from 'nanostores';
import { CardType } from '@type/explore/card';
import {
  fetchDefaultCards,
  fetchCardDataPseudo,
  fetchDefaultCardsProfilePseudo,
  fetchRoadmapCardsProfile,
} from '../api-wrapper/explore/roadmap-card-data';

const cardsFromApi = atom(
  {} as {
    [value: string]: CardType;
  }
);

/* eslint-disable import/prefer-default-export */
export async function setRoadmapCardsFromApi(cardName: string) {
  const card = await fetchCardDataPseudo(cardName);
  const original = cardsFromApi.get();
  original[cardName] = card;
  cardsFromApi.set({ ...original });
}

export async function setCardsFromApiDefault() {
  const idArray = await fetchDefaultCards();
  await Promise.all(
    idArray.map(async (value) => {
      await setRoadmapCardsFromApi(value);
    })
  );
}

export function addCardToStore(id: string, card: CardType) {
  const original = cardsFromApi.get();
  original[id] = card;
  cardsFromApi.set({ ...original });
}

export async function setRoadmapCardsFromApiProfile(
  id: string,
  author: string
) {
  const idArray = await fetchRoadmapCardsProfile(id);
  console.log(idArray);
  idArray.forEach((value) => {
    const newValue: CardType = {
      name: value.name,
      author,
      description: value.description,
      likes: 0,
      id: value.id,
    };
    addCardToStore(value.id, newValue);
  });
}

export function emptyStore() {
  cardsFromApi.set({});
}

export default cardsFromApi;
