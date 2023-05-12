import { AnalyticsBrowser } from '@segment/analytics-next';

export type EventType =
  | 'pageView'
  | 'roadmapInteraction'
  | 'profileInteraction'
  | 'exploreInteraction'
  | 'authInteraction';

type VisitPagePayload = {
  page: string;
};

type RoadmapInteraction = {
  actionType:
    | 'Create Roadmap'
    | 'Delete Roadmap'
    | 'Add Node'
    | 'Remove Node'
    | 'Delete Node'
    | 'Edit Roadmap'
    | 'Save Roadmap'
    | 'Cancel Create Roadmap'
    | 'Cancel Save Roadmap'
    | 'Open About'
    | 'Open Issues';
};

type AuthInteraction = {
  actionType: 'Github Auth' | 'Google Auth' | 'Logout';
};

type ProfileInteraction = {
  actionType: 'Follow' | 'Unfollow';
};

type ExploreInteraction = {
  actionType: 'Search' | 'Like Roadmap';
};

export type DataPayloads = {
  pageView: VisitPagePayload;
  roadmapInteraction: RoadmapInteraction;
  profileInteraction: ProfileInteraction;
  exploreInteraction: ExploreInteraction;
  authInteraction: AuthInteraction;
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
