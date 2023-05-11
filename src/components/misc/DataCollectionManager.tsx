import React, { useEffect, useState } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { useStore } from '@nanostores/react';
import analyticsStore from '@store/misc/analytics';
import { Event, EventMapper, EventType } from '@type/misc/analytics';
import {
  checkIsEventLogin,
  checkIsEventPageView,
} from '@type/misc/typecheckers';

const DataCollectionManager = () => {
  const EventMap: EventMapper = {
    pageView: (analytics: AnalyticsBrowser, event: Event<EventType>) => {
      if (checkIsEventPageView(event)) {
        analytics.pageView(event.data.page);
      }
    },
    login: (analytics: AnalyticsBrowser, event: Event<EventType>) => {
      if (checkIsEventLogin(event)) {
        analytics.register();
      }
    },
  };

  const triggerEvents = <T extends EventType>(
    event: Event<T>,
    analytics: AnalyticsBrowser
  ) => {
    const eventHandler = EventMap[event.type];
    if (eventHandler) {
      eventHandler(analytics, event);
    }
  };

  const { dispatchedEvents } = useStore(analyticsStore);
  const [analytics, setAnalytics] = useState(null);
  useEffect(() => {
    const analyticsObject = AnalyticsBrowser.load({
      writeKey: 'gqHz7gJIiPkOPu1BRGc6kIAT569vnSWc',
    });
    setAnalytics(analyticsObject);
  }, []);

  useEffect(() => {
    dispatchedEvents.forEach((event) => {
      console.log(event);
      triggerEvents(event, analytics);
    });
  }, [dispatchedEvents]);
};

export default DataCollectionManager;
