import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import user, { fetchUserAndSetStore } from '@store/user';
import { setCardsFromApiDefaultProfile } from '@store/card_store_explore';
import followers from '@assets/followers.svg';
import link from '@assets/link.svg';
import dizaign from '@assets/dizaign.svg';
import placeholderchart from '@assets/placeholderchart.png';

const ProfileDisplay = () => {
  const userData = useStore(user);
  const [render, setRender] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // eslint-disable-next-line no-console
  // console.log('in react component', userData);

  useEffect(() => {
    fetchUserAndSetStore().then(() => {
      // sets user data and loads it into profile
      setRender((prev) => !prev);
      setLoaded(true);
    });
    setCardsFromApiDefaultProfile().then(() => {
      setRender((prev) => !prev);
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
      <div className='flex justify-between w-10/12 mt-44 items-center text-center'>
        <div className='flex flex-col justify-center items-center w-full transform my-12'>
          <div className='w-60 h-60 xl:w-72 xl:h-72 absolute -top-80 '>
            <img
              className='rounded-full w-full h-full flex '
              src={setProfileUrl()}
              alt='profile'
            />
          </div>
          <div className='flex justify-center items-center text-center w-fit'>
            <div className='text-2xl font-semibold font-roboto-text'>
              {userData.name}
            </div>
          </div>
          <div>
            <div className='text-lg font-light text-center mt-2 font-roboto-text text-secondary'>
              we dont have small description yet
            </div>
          </div>
          <div className='flex gap-10 mt-6'>
            <div className='text-md font-normal text-center flex font-roboto-text'>
              <img
                src={followers}
                className='flex mx-4 w-6 h-6 '
                alt='followersicon'
              />
              {userData.followerCount}
              <div className='flex text-md text-placeholder mx-2 font-roboto-text'>
                followers
              </div>
            </div>
            <div className='text-md font-normal text-center flex font-roboto-text'>
              <img
                src={followers}
                className='flex mx-4 w-6 h-6'
                alt='followingicon'
              />
              {userData.followingCount}
              <div className='flex text-md text-placeholder mx-2 font-roboto-text'>
                following
              </div>
            </div>
          </div>
          <button type='button'>
            <div className='text-md hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4 font-roboto-text'>
              Edit profile
            </div>
          </button>
          <div className='flex-col justify-center items-center w-fit mt-4'>
            <div className='text-[14px] text-center text-placeholder font-roboto-text'>
              Quote
            </div>
            <div className='italic text-[20px] font-normal text-center text-secondary font-roboto-text'>
              &quot;{userData.quote}&quot;
            </div>
          </div>
          <div className='flex justify-center text-center items-center mt-4 w-fit'>
            <a
              href={userData.websiteUrl === '' ? '#' : userData.websiteUrl}
              className='inline-block text-[20px] font-normal text-center text-primary font-roboto-text'
              aria-label='Link to external website'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={link} className='mx-2 inline-block' alt='linkicon' />
              {userData.websiteUrl}
            </a>
          </div>
          <div className='flex flex-col justify-start text-start text-[20px] text-main font-normal font-roboto-text mt-4 mx-16'>
            BIO
            <h2 className='text-md flex font-normal text-start text-[16px] mt-4 text-secondary font-roboto-text'>
              {userData.bio}
            </h2>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col justify-around my-24'>
        <div className='flex w-full justify-around'>
          <div className='flex w-fit flex-col items-center'>
            <div className='flex'>
              <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                Created Roadmaps
              </h1>
            </div>
            <div className='flex'>
              <img src={dizaign} className='flex' alt='line' />
              <h2 className='text-xl font-normal mx-4 text-center font-roboto-text'>
                {userData.roadmapsCount}
              </h2>
              <img src={dizaign} className='flex' alt='line' />
            </div>
          </div>
          <div className='flex w-fit flex-col items-center'>
            <div className='flex'>
              <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                Completed Roadmaps
              </h1>
            </div>
            <div className='flex'>
              <img src={dizaign} className='flex' alt='line' />
              <h2 className='text-xl font-normal mx-4 text-center font-roboto-text'>
                {userData.roadmapsCount}
              </h2>
              <img src={dizaign} className='flex' alt='line' />
            </div>
          </div>
          <div className='flex flex-col items-center w-fit'>
            <div className='flex items-center w-fit'>
              <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                Roadmaps in progress
              </h1>
            </div>
            <div className='flex items-center w-fit'>
              <img src={dizaign} className='flex' alt='line' />
              <h2 className='text-xl font-normal text-center mx-4 font-roboto-text'>
                {userData.roadmapsCount}
              </h2>
              <img src={dizaign} className='flex' alt='line' />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='w-60 ' src={placeholderchart} alt='chart' />
        </div>
      </div>
    </>
  );
};

export default ProfileDisplay;
