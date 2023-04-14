import { atom } from 'nanostores';

const nodeTriggers = atom({
  triggers: {}, // all the rerender triggers for the nodes
} as {
  triggers: any;
});

export function setTrigger(id: string, cb: any) {
  const original = nodeTriggers.get();
  original.triggers[id] = cb;
  nodeTriggers.set({
    ...original,
  });
}

export function removeTrigger(id: string) {
  const original = nodeTriggers.get();
  delete original.triggers[id];
  nodeTriggers.set({
    ...original,
  });
}

export function getTriggersAll() {
  const original = nodeTriggers.get();
  return original.triggers;
}
export function getTrigger(id: string) {
  const original = nodeTriggers.get();
  return original.triggers[id];
}

export default nodeTriggers;
