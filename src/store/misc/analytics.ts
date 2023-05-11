import { atom } from 'nanostores';
import { DataPayloads, Event, EventType } from '@type/misc/analytics';

const analyticsStore = atom({
  dispatchedEvents: [] as Event<EventType>[],
});

const eventBuilder = <T extends EventType>(
  type: T,
  data: DataPayloads[T]
): Event<T> => {
  return {
    type,
    data,
  };
};

export const dispatchAnalyticsEvent = <T extends EventType>(
  type: T,
  data: DataPayloads[T]
) => {
  // used for sending events for analytics
  // If you think this kind of tracking might be invasive in any way, please
  // tell us and we'll remove it.
  const original = analyticsStore.get();
  analyticsStore.set({
    ...original,
    dispatchedEvents: [...original.dispatchedEvents, eventBuilder(type, data)],
  });
};

export const emptyDispatchedEvents = () => {
  const original = analyticsStore.get();
  analyticsStore.set({
    ...original,
    dispatchedEvents: [],
  });
};

export const getDispatchedEvents = () => {
  return analyticsStore.get().dispatchedEvents;
};

export default analyticsStore;
