import { atom } from 'nanostores';
import {
  fetchDefaultCards,
  fetchCardData,
  fetchDefaultCardsProfile,
} from 'src/api/explore/card-data';
import { CardType } from '@type/explore/card';

const cardsFromApi = atom({});

/* eslint-disable import/prefer-default-export */
export async function setCardsFromApi(cardName: string) {
  const card = await fetchCardData(cardName);
  const original = cardsFromApi.get();
  original[cardName] = card;
  cardsFromApi.set({ ...original });
}

export async function setCardsFromApiDefault() {
  const idArray = await fetchDefaultCards();
  await Promise.all(
    idArray.map(async (value) => {
      await setCardsFromApi(value);
    })
  );
}

export async function setCardsFromApiDefaultProfile() {
  const idArray = await fetchDefaultCardsProfile();
  await Promise.all(
    idArray.map(async (value) => {
      await setCardsFromApi(value);
    })
  );
}

export function emptyStore() {
  cardsFromApi.set({});
}

export default cardsFromApi;
