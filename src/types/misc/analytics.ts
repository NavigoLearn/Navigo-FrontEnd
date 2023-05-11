import { AnalyticsBrowser } from '@segment/analytics-next';

export type EventType = 'pageView' | 'login';

type VisitPagePayload = {
  page: string;
};

type LoginPayload = null;

export type DataPayloads = {
  pageView: VisitPagePayload;
  login: LoginPayload;
};

export type Event<T extends EventType> = {
  type: T;
  data: DataPayloads[T];
};

export type EventMapper = {
  [key in EventType]: (
    analytics: AnalyticsBrowser,
    event: Event<EventType>
  ) => any;
};
