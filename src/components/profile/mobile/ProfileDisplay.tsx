import React, { useEffect, useState } from 'react';
import eugene from '@assets/eugen.png';
import followers from '@assets/followers.svg';
import link from '@assets/link.svg';
import dizaign from '@assets/dizaign.svg';
import arrowdwn from '@assets/arrow-down.svg';
import arrowup from '@assets/arrow-up.svg';
import cardsFromApi, {
  setRoadmapCardsFromApiProfile,
} from '@store/card_store_explore';
import user, { fetchUserAndSetStore } from '@store/user';
import { useStore } from '@nanostores/react';

const ProfileDisplay = () => {
  const userData = useStore(user);
  const [click, setClick] = useState(false);
  const [render, setRender] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };

  useEffect(() => {
    fetchUserAndSetStore().then(() => {
      // sets user data and loads it into profile
      setRender((prev) => !prev);
      setLoaded(true);
    });
  }, []);

  function setProfileUrl() {
    if (!loaded) return '';
    return userData.profilePictureUrl === ''
      ? 'https://media.istockphoto.com/id/470100848/ro/vector/pictograma-profilului-masculin-alb%C4%83-pe-fundal-albastru.jpg?s=612x612&w=0&k=20&c=-We-8zY-Oj7MMSuKwpOEkm7QUX8Gnc4Bk0KcBIO8lYY='
      : userData.profilePictureUrl;
  }

  return (
    <>
      <img
        src={setProfileUrl()}
        alt='avatar'
        className='rounded-full flex w-6/12 '
      />
      <h1 className='flex text-center font-semibold font-roboto-text text-4xl mt-4'>
        {userData.name}
      </h1>
      <h2 className='text-md font-light text-center mt-2 font-roboto-text text-secondary sm:text-lg'>
        no label yet
      </h2>
      <button type='button'>
        <h2 className='text-lg hover:underline text-white font-medium py-3 px-14 bg-primary rounded-3xl mt-4 font-roboto-text sm:-text-xl sm:py-4 sm:px-20'>
          Edit profile
        </h2>
      </button>
      <h3 className='text-sm text-center mt-4 text-placeholder font-robot sm:text-md'>
        Quote
      </h3>
      <h2 className='italic text-md font-normal text-center text-secondary font-roboto-text sm:text-lg'>
        &quot;{userData.quote}&quot;
      </h2>
      <div className='flex flex-row justify-center items-center text-center mt-4'>
        <div className='flex items-center text-center justify-center'>
          <img src={followers} alt='followers' className='w-6 mx-2 sm:w-8' />
          <h2 className='text-md font-normal text-center items-center text-secondary font-roboto-text sm:text-lg'>
            {userData.followerCount}
          </h2>
          <h3 className='text-md text-center text-main font-roboto-text mx-2 sm:text-lg'>
            followers
          </h3>
        </div>
        <div className='flex items-center justify-center text-center'>
          <img src={followers} alt='followers' className='w-6 mx-2 sm:w-8' />
          <h2 className='text-md font-normal text-center items-center text-secondary font-roboto-text sm:text-lg'>
            {userData.followingCount}
          </h2>
          <h3 className='text-md text-center text-main font-robot mx-2 sm:text-lg'>
            following
          </h3>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <a
          href={userData.websiteUrl}
          className='inline-block text-md font-normal text-center text-primary font-roboto-text justify-center sm:text-lg'
          aria-label='Link to external website'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={link} className='mx-2 inline-block' alt='linkicon' />
          {userData.websiteUrl}
        </a>
      </div>
      <div>
        {click ? (
          <div className='text-center items-center'>
            <button
              type='button'
              className='flex mx-auto text-[16px] justify-center font-roboto-text text-secondary items-center text-center mt-4'
              onClick={handleClick}
              onKeyDown={handleClick}
            >
              <h3 className='inline-block text-center'>See less</h3>
              <img
                src={arrowup}
                alt='arrowupicon'
                className='inline-block ml-4 w-4'
              />
            </button>
            <div className='flex flex-col justify-center items-center'>
              <div className='justify-around mt-4 text-center items-center'>
                <div className='inline-block mx-12 flex-col items-center'>
                  <div className='flex'>
                    <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                      Created Roadmaps
                    </h1>
                  </div>
                  <div className='flex justify-center'>
                    <img src={dizaign} className='flex' alt='line' />
                    <h2 className='text-2xl font-normal mx-4 text-center font-roboto-text'>
                      {userData.roadmapsCount}
                    </h2>
                    <img src={dizaign} className='flex' alt='line' />
                  </div>
                </div>
                <div className='inline-block mx-12 flex-col items-center'>
                  <div className='flex'>
                    <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                      Completed Roadmaps
                    </h1>
                  </div>
                  <div className='flex justify-center'>
                    <img src={dizaign} className='flex' alt='line' />
                    <h2 className='text-2xl font-normal mx-4 text-center font-roboto-text'>
                      {userData.roadmapsCount}
                    </h2>
                    <img src={dizaign} className='flex' alt='line' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start text-start text-main font-normal font-roboto-text mt-4 mx-16 sm:text-xl'>
                BIO
                <h2 className='text-sm sm:text-xl flex font-normal text-start mt-4 text-secondary font-roboto-text'>
                  {userData.bio}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <button
            type='button'
            className='flex text-[16px] font-roboto-text text-secondary items-center text-center mt-4'
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            <h3 className='inline-block'>See more</h3>
            <img
              src={arrowdwn}
              alt='arrowdownicon'
              className='inline-block ml-4 w-4'
            />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileDisplay;
