import {
  CardTypeApiResponse,
  CardTypeApiResponseExplore,
  RoadmapTypeApiExplore,
} from '@type/explore/card';

export const fetchDefaultCardsExplore = async (
  query: string,
  page: number
): Promise<CardTypeApiResponseExplore> => {
  let fetchRouteExplore;
  if (query !== '') {
    fetchRouteExplore = `api/explore/?query=${query}&count=9&page=${page}`;
  } else {
    fetchRouteExplore = `api/explore/?count=9&page=${page}`;
  }
  const responseExplore = await fetch(fetchRouteExplore, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const dataJsonExplore: CardTypeApiResponseExplore =
    await responseExplore.json();
  return dataJsonExplore;
};

export const fetchRoadmapCardsProfile = async (
  id: string
): Promise<RoadmapTypeApiExplore[]> => {
  // fetches from the api the cards
  const fetchRoute = `/api/users/${id}/roadmaps`;
  const response = await fetch(fetchRoute, {
    method: 'GET',
    credentials: 'include',
  });
  const dataJson: CardTypeApiResponse = await response.json();
  return dataJson.roadmaps;
};
