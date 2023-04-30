import { atom } from 'nanostores';
import { User, UserResponse } from '@type/user/types';
import { checkIsTypeUser } from '@type/user/typecheckers';
import { fetchUserData } from '../api-wrapper/user/user';

const generateUserBoilerplate = (): User => ({
  userId: '',
  profilePictureUrl: '',
  name: '',
  followerCount: 0,
  followingCount: 0,
  quote: '',
  websiteUrl: '',
  bio: '',
  roadmapsCount: 0,
});

const parseResponse = (response: UserResponse): User => {
  if (!checkIsTypeUser(response)) {
    throw new Error('Response is not of type User');
  }
  // parses some of the response properties to the correct type
  const parsedResponse: User = { ...response };
  parsedResponse.followerCount = parseInt(response.followerCount, 10);
  parsedResponse.followingCount = parseInt(response.followingCount, 10);
  parsedResponse.roadmapsCount = parseInt(response.roadmapsCount, 10);
  return parsedResponse;
};

const user = atom(generateUserBoilerplate() as User);

export const fetchUserAndSetStore = async () => {
  const originalUser = user.get();
  const response = await fetchUserData();
  if (!checkIsTypeUser(response)) {
    throw new Error('Response is not of type User');
  }
  const parsedResponse = parseResponse(response);
  user.set(parsedResponse);
};

export default user;
