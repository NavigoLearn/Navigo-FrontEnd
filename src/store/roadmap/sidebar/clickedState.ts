import { atom } from 'nanostores';

const positionClickedIndex = atom({
  clickedIndex: -1,
} as {
  clickedIndex: number;
});

export function setClickedIndex(index: number) {
  const original = positionClickedIndex.get();
  original.clickedIndex = index;
  positionClickedIndex.set({ ...original });
}

export default positionClickedIndex;
