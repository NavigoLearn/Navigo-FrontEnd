import { atom } from 'nanostores';

const popup = atom({
  type: 'none',
} as {
  type: string;
});

export function setReport() {
  const newPop = popup.get();
  // closes popup if is report
  if (newPop.type === 'report') {
    newPop.type = 'none';
    popup.set({
      ...newPop,
      type: 'none',
    });
    return;
  }
  // sets type to report
  popup.set({
    ...newPop,
    type: 'report',
  });
}

export default popup;
