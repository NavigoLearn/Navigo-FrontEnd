import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import user from '@store/user';
import eugene from '@assets/eugensex.png';
import followers from '@assets/followers.svg';
import link from '@assets/link.svg';
import dizaign from '@assets/dizaign.svg';
import arrowdwn from '@assets/arrow-down.svg';
import arrowup from '@assets/arrow-up.svg';
import GridFilters from '../explore/GridFilters';
import CardGrid from '../explore/CardGrid';
import Scroll from '../explore/Scroll';

user.set({
  id: '1',
  name: 'Eughen',
  email: 'pussyslayer69@gmail.com',
  avatar: eugene,
  quote: 'Pentru ca la Cluj au apa calda',
  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  description: 'sunt cel mai sex baiat',
  followers: 69,
  following: 420,
  BIO: 'Avid and passionate learner -- insert more linkedin boilerplate --. Average math enjoyer, likes a bit of competitive programming,  likes gym and the pump, likes nietzsche but goes out of his way to not read books despite wanting to.  Loves making startups and bringing ideas and meaningful changes to reality. Also likes speaking in public but is antisocial. If you want to contact me you are welcome to leave me alone',
  completedRoadmaps: 3,
  createdRoadmaps: 12,
  inProgressRoadmaps: 7,
});

type Roamdmap = {
  id: number;
  name: string;
  madeby: string;
  nolikes: number;
  description: string;
};

const MobileProfile = () => {
  const userData = useStore(user);
  const [data, setData] = useState<Roamdmap[]>([]);
  // eslint-disable-next-line no-console
  console.log('in react component', userData);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        '../src/components/search/roadmapTests.json'
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  console.log(data);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className='flex flex-col w-full h-full items-center my-24 text-center'>
      <img
        src={eugene}
        alt='avatar'
        className='rounded-full flex w-8/12 sm:w-7/12'
      />
      <h1 className='flex text-center font-semibold font-roboto-text text-4xl mt-4'>
        {userData.name}
      </h1>
      <h2 className='text-md font-light text-center mt-2 font-roboto-text text-secondary sm:text-lg'>
        {userData.description}
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
            {userData.followers}
          </h2>
          <h3 className='text-md text-center text-main font-roboto-text mx-2 sm:text-lg'>
            followers
          </h3>
        </div>
        <div className='flex items-center justify-center text-center'>
          <img src={followers} alt='followers' className='w-6 mx-2 sm:w-8' />
          <h2 className='text-md font-normal text-center items-center text-secondary font-roboto-text sm:text-lg'>
            {userData.following}
          </h2>
          <h3 className='text-md text-center text-main font-robot mx-2 sm:text-lg'>
            following
          </h3>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <a
          href={userData.link}
          className='inline-block text-md font-normal text-center text-primary font-roboto-text justify-center sm:text-lg'
          aria-label='Link to external website'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={link} className='mx-2 inline-block' alt='linkicon' />
          {userData.link}
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
                      {userData.createdRoadmaps}
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
                      {userData.completedRoadmaps}
                    </h2>
                    <img src={dizaign} className='flex' alt='line' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start text-start text-main font-normal font-roboto-text mt-4 mx-16 sm:text-xl'>
                BIO
                <h2 className='text-sm sm:text-xl flex font-normal text-start mt-4 text-secondary font-roboto-text'>
                  {userData.BIO}
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
      <ul className='flex justify-center mt-[228px]'>
        <div className='grid big:grid-cols-3 medium:gap-x-[48px] medium:gap-y-[61px] medium:grid-cols-2 gap-y-[35px]'>
          {data.map((value) => (
            <div key={value.id} className='w-[389px]'>
              <CardGrid
                name={value.name}
                madeby={value.madeby}
                nolikes={value.nolikes}
                description={value.description}
              />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default MobileProfile;
