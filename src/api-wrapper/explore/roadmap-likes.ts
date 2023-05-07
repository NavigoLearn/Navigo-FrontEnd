import { likeType } from '@type/explore/card';

export const likeCardFetch = async (id: string): Promise<{}> => {
  const fetchSource = `/api/roadmaps/${id}/like`;
  const response = await fetch(fetchSource, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const responseJson: likeType = await response.json();
  console.log(responseJson.success);
  return responseJson.success;
};

export const unlikeCardFetch = async (id: string): Promise<void> => {
  const fetchSource = `/api/roadmaps/${id}/like`;
  await fetch(fetchSource, {
    method: 'DELETE',
    credentials: 'include',
  });
};

export const checkForLike = async (id: string): Promise<{}> => {
  const fetchSource = `/api/roadmaps/${id}/check-like`;
  let isFetched: boolean;
  const response = await fetch(fetchSource, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res);
  const responseJson = await response.json();
  // console.log(responseJson);
  if (responseJson.status === true) {
    isFetched = true;
  } else {
    isFetched = false;
  }
  return isFetched;
};
