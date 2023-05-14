import { EventType, Event } from '@type/misc/analytics';

export function checkIsEventExploreInteraction(
  props: any
): props is Event<'exploreInteractionQuery'> {
  return props.type === 'exploreInteractionQuery';
}

export function checkIsEventProfileInteraction(
  props: any
): props is Event<'profileInteraction'> {
  return props.type === 'profileInteraction';
}

export function checkIsEventAuthInteraction(
  props: any
): props is Event<'authInteraction'> {
  return props.type === 'authInteraction';
}

export function checkIsEventRoadmapInteraction(
  props: any
): props is Event<'roadmapInteraction'> {
  return props.type === 'roadmapInteraction';
}
export function checkIsEventPageView(props: any): props is Event<'pageView'> {
  return props.type === 'pageView';
}
