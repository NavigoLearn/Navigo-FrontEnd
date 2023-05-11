import { EventType, Event } from '@type/misc/analytics';

export function checkIsEventLogin(props: any): props is Event<'login'> {
  return props.type === 'login';
}
export function checkIsEventPageView(props: any): props is Event<'pageView'> {
  return props.type === 'pageView';
}
