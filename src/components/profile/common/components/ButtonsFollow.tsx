import React, { useState, useEffect } from 'react';
import userDisplay from '@store/user/user-display';
import {
  fetchFollowUser,
  fetchGetUserIsFollowing,
  fetchUnfollowUser,
} from '../../../../api-wrapper/user/user';

const ButtonsFollow = ({ reqAgain }: { reqAgain: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  const [following, setFollowing] = useState(false);
  const { userId } = userDisplay.get();

  useEffect(() => {
    // fetch data
    if (userId === '') {
      return;
    }
    fetchGetUserIsFollowing(userId).then((response) => {
      setFollowing(response.status);
      setLoaded(true);
    });
    // setLoaded(true);
  }, [userId]);

  return (
    <>
      {loaded && following && (
        <button
          onClick={() => {
            // unfollows user
            fetchUnfollowUser(userId).then(() => {
              setFollowing(false);
              reqAgain();
            });
          }}
          type='button'
        >
          <div className='text-md hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4 font-roboto-text'>
            Unfollow
          </div>
        </button>
      )}
      {loaded && !following && (
        <button
          onClick={() => {
            // folllows user
            fetchFollowUser(userId).then(() => {
              setFollowing(true);
              reqAgain();
            });
          }}
          type='button'
        >
          <div className='text-md hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4 font-roboto-text'>
            Follow
          </div>
        </button>
      )}
      {!loaded && (
        <div className='text-md hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4 font-roboto-text'>
          getting data...
        </div>
      )}
    </>
  );
};

export default ButtonsFollow;