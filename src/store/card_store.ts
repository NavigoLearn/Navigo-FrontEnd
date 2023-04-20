import { atom } from 'nanostores';
import { fetchDefaultCards, fetchCardData } from 'src/api/explore/card-data';
import { CardType } from '@type/explore/card';
import { deepCopy } from '@type/roadmap/utils';

const cardsFromApi = atom({});

/* eslint-disable import/prefer-default-export */
export async function setCardsFromApi(cardName: string) {
  const card = await fetchCardData(cardName);
  const original = cardsFromApi.get();
  original[cardName] = card;
  cardsFromApi.set({ ...original });
  console.log(deepCopy(cardsFromApi.get()));
}

export async function setCardsFromApiDefault() {
  const idArray = await fetchDefaultCards();
  await Promise.all(
    idArray.map(async (value) => {
      await setCardsFromApi(value);
    })
  );
}

export default cardsFromApi;
