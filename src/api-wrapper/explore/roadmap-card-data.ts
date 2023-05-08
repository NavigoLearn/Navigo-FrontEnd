import {
  RoadmapTypeApi,
  CardTypeApiResponse,
  CardTypeApiResponseExplore,
  RoadmapTypeApiExplore,
} from '@type/explore/card';

export const fetchDefaultCardsExplore = async (
  query: string,
  page: number
): Promise<RoadmapTypeApiExplore[]> => {
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
  return dataJsonExplore.roadmaps;
};

export const fetchRoadmapCardsProfile = async (
  id: string
): Promise<RoadmapTypeApi[]> => {
  // fetches from the api the cards
  const fetchRoute = `/api/users/${id}/roadmaps`;
  const response = await fetch(fetchRoute, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const dataJson: CardTypeApiResponse = await response.json();
  return dataJson.roadmaps;
};
