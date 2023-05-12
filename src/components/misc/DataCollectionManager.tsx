import React, { useEffect, useMemo } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { useStore } from '@nanostores/react';
import analyticsStore, { emptyDispatchedEvents } from '@store/misc/analytics';
import { Event, EventMapper, EventType } from '@type/misc/analytics';
import {
  checkIsEventAuthInteraction,
  checkIsEventExploreInteraction,
  checkIsEventPageView,
  checkIsEventProfileInteraction,
  checkIsEventRoadmapInteraction,
} from '@type/misc/typecheckers';
import userStatusStore from '@store/user/user-status';
import loggedUser from '@store/user/logged-user';

const DataCollectionManager = () => {
  const EventMap: EventMapper = {
    roadmapInteraction: (
      analytics: AnalyticsBrowser,
      event: Event<EventType>
    ) => {
      if (checkIsEventRoadmapInteraction(event)) {
        // roadmap Interaction
        analytics.track(event.type, {
          actionType: event.data.actionType,
        });
      }
    },
    exploreInteraction: (
      analytics: AnalyticsBrowser,
      event: Event<EventType>
    ) => {
      if (checkIsEventExploreInteraction(event)) {
        // explore interaction message
        analytics.track(event.type, {
          actionType: event.data.actionType,
        });
      }
    },
    profileInteraction: (
      analytics: AnalyticsBrowser,
      event: Event<EventType>
    ) => {
      if (checkIsEventProfileInteraction(event)) {
        // type of profile interaction
        analytics.track(event.type, {
          actionType: event.data.actionType,
        });
      }
    },
    authInteraction: (analytics: AnalyticsBrowser, event: Event<EventType>) => {
      console.log(' before check got to auth');
      if (checkIsEventAuthInteraction(event)) {
        // type of profile interaction
        console.log('got to auth');
        analytics.track(event.type, {
          actionType: event.data.actionType,
        });
      }
    },
    pageView: (analytics: AnalyticsBrowser, event: Event<EventType>) => {
      if (checkIsEventPageView(event)) {
        analytics.pageView(event.data.page);
      }
    },
  };

  const triggerEvents = <T extends EventType>(
    event: Event<T>,
    analytics: AnalyticsBrowser
  ) => {
    const eventHandler = EventMap[event.type];
    console.log(eventHandler);
    if (eventHandler) {
      eventHandler(analytics, event);
    }
  };

  const { dispatchedEvents } = useStore(analyticsStore);

  const analytics = useMemo(() => {
    return AnalyticsBrowser.load({
      writeKey: 'gqHz7gJIiPkOPu1BRGc6kIAT569vnSWc',
    });
  }, []);

  const { isLogged, loaded } = useStore(userStatusStore);
  useEffect(() => {
    // identify if user is logged in
    if (loaded && isLogged) {
      analytics.identify(loggedUser.get().userId, {
        name: loggedUser.get().name,
        id: loggedUser.get().userId,
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (dispatchedEvents.length === 0) return;
    dispatchedEvents.forEach((event) => {
      console.log(event);
      triggerEvents(event, analytics);
    });
    emptyDispatchedEvents();
  }, [dispatchedEvents]);
};

export default DataCollectionManager;
