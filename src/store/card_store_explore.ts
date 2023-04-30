import { atom } from 'nanostores';
import {
  fetchDefaultCards,
  fetchCardDataPseudo,
  fetchDefaultCardsProfilePseudo,
  fetchRoadmapCardsProfile,
} from '../api-wrapper/explore/roadmap-card-data';

const cardsFromApi = atom({});

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

export async function setRoadmapCardsFromApiProfile(id: string) {
  const idArrayObj = await fetchRoadmapCardsProfile(id);
  const idArray = idArrayObj.roadmaps;
  await Promise.all(
    idArray.map(async (value) => {
      await setRoadmapCardsFromApi(value);
    })
  );
}

export function emptyStore() {
  cardsFromApi.set({});
}

export default cardsFromApi;
