import { atom } from 'nanostores';

const positionSubject = atom({
  positionYOffset: 0,
  positionY: 0,
  subscriberCallback: () => {},
  hoveredCallback: () => {},
  hovered: false,
} as {
  positionYOffset: number;
  positionY: number;
  subscriberCallback: (positionY: number) => void;
  hoveredCallback: (hovered: boolean) => void;
  hovered: boolean;
});

export function subscribePosition(callback: (positionY: number) => void) {
  const original = positionSubject.get();
  original.subscriberCallback = callback;
  positionSubject.set({ ...original });
}

export function subscribeHovered(callback: (hovered: boolean) => void) {
  const original = positionSubject.get();
  original.hoveredCallback = callback;
  positionSubject.set({ ...original });
}

export function setOffsetY(offset: number) {
  const original = positionSubject.get();
  original.positionYOffset = offset;
  positionSubject.set({ ...original });
}

export function notifyHoverSubscriber() {
  const original = positionSubject.get();
  original.hoveredCallback(original.hovered);
}

export function notifyPositionSubscriber() {
  const original = positionSubject.get();
  original.subscriberCallback(
    original.positionY - original.positionYOffset - 26
  );
}

export function evalHoverDiff(hover: boolean) {
  const original = positionSubject.get();
  console.log('evalHoverDiff', original.hovered, hover);
  if (!(original.hovered === hover)) {
    original.hovered = hover;
    positionSubject.set({ ...original });
    return true;
  }
  return false;
}
export function evalPosDiff(positionY: number) {
  const original = positionSubject.get();
  if (!(original.positionY === positionY)) {
    original.positionY = positionY;
    positionSubject.set({ ...original });
    return true;
  }
  return false;
}

export function dispatchNewHoverValue(hover: boolean) {
  evalHoverDiff(hover);
  notifyHoverSubscriber();
}

export function dispatchNewPositionValue(positionY: number) {
  if (evalPosDiff(positionY)) notifyPositionSubscriber();
}

export default positionSubject;
