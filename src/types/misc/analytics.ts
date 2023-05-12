import { AnalyticsBrowser } from '@segment/analytics-next';

export type EventType =
  | 'pageView'
  | 'roadmapInteraction'
  | 'profileInteraction'
  | 'exploreInteractionQuery'
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

type ExploreInteractionTypes = 'Search' | 'Like Roadmap';

type ExploreInteractionDataTypes = {
  Search: {
    query: string;
  };
  'Like Roadmap': {
    roadmapId: string;
  };
};
type ExploreInteraction<T extends ExploreInteractionTypes> = {
  exploreActionType: T;
  exploreData: ExploreInteractionDataTypes[T];
};

export type DataPayloads = {
  pageView: VisitPagePayload;
  roadmapInteraction: RoadmapInteraction;
  profileInteraction: ProfileInteraction;
  exploreInteractionQuery: ExploreInteraction<'Search'>;
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
