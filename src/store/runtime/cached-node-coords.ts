import { atom } from 'nanostores';
import { HashMap } from '@type/roadmap/roadmap';
import { Coord } from '@type/roadmap/nodes';

const cachedCoords = atom({} as HashMap<Coord>);

export const cacheNodeCoord = (id: string, coord: Coord) => {
  const original = cachedCoords.get();
  cachedCoords.set({ ...original, [id]: coord });
};

export const getCachedNodeCoord = (id: string) => {
  const original = cachedCoords.get();
  return original[id];
};

export const checkCachedNodeCoord = (id: string) => {
  const original = cachedCoords.get();
  return original[id];
};

export const emptyCachedNodeCoord = (id: string) => {
  const original = cachedCoords.get();
  const { [id]: _, ...rest } = original;
  cachedCoords.set(rest);
};

export const emptyCachedNodeCoordAll = () => {
  cachedCoords.set({});
};

export default cachedCoords;
