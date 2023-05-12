import React, { useEffect } from 'react';
import { dispatchAnalyticsEvent } from '@store/misc/analytics';

const PageViewCollection = ({ page }: { page: string }) => {
  useEffect(() => {
    console.log('page', page);
    dispatchAnalyticsEvent('pageView', {
      page,
    });
  }, []);
};

export default PageViewCollection;
