import { likeType } from '@type/explore/card';

export const likeCardFetch = async (id: string): Promise<boolean> => {
  const fetchSource = `/api/roadmaps/${id}/like`;
  const response = await fetch(fetchSource, {
    method: 'GET',
    credentials: 'include',
  });
  return response.status===200;
};

export const unlikeCardFetch = async (id: string): Promise<boolean> => {
  const fetchSource = `/api/roadmaps/${id}/like`;
  let res = await fetch(fetchSource, {
    method: 'DELETE',
    credentials: 'include',
  });

  return res.status===200;
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
