import React from 'react';
import { useStore } from '@nanostores/react';
import user from '@store/user';
import eugene from '@assets/eugensex.png';
import followers from '@assets/followers.svg';
import link from '@assets/link.svg';
import dizaign from '@assets/dizaign.svg';
import placeholderchart from '@assets/placeholderchart.png';

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
  roadmapProgressData: [
    {
      roadmapId: 1,
      roadmapName: 'Roadmap 1',
      roadmapDescription: 'This is a description of roadmap 1',
      roadmapLikes: 10,
    },
    {
      roadmapId: 2,
      roadmapName: 'Roadmap 2',
      roadmapDescription: 'This is a description of roadmap 2',
      roadmapLikes: 10,
    },
    {
      roadmapId: 3,
      roadmapName: 'Roadmap 3',
      roadmapDescription: 'This is a description of roadmap 3',
      roadmapLikes: 10,
    },
    {
      roadmapId: 4,
      roadmapName: 'Roadmap 4',
      roadmapDescription: 'This is a description of roadmap 4',
      roadmapLikes: 10,
    },
    {
      roadmapId: 5,
      roadmapName: 'Roadmap 5',
      roadmapDescription: 'This is a description of roadmap 5',
      roadmapLikes: 10,
    },
  ],
});

const Profile = () => {
  const userData = useStore(user);
  console.log('in react component', userData);

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center my-40'>
      <div className='flex justify-center mx-auto w-screen h-screen my-96'>
        <div className='flex w-10/12 shadow-xl bg-white relative rounded-3xl min-h-10/12'>
          <div className='flex justify-between rounded-3xl w-10/12 mt-44 items-center text-center'>
            <div className='flex flex-col justify-center items-center w-full transform my-12'>
              <div className='w-fit absolute -top-80'>
                <img
                  className='rounded-full w-full flex'
                  src={userData.avatar}
                  alt='profile'
                />
              </div>
              <div className='flex justify-center items-center text-center w-fit'>
                <h1 className='text-[32px] font-semibold font-roboto-text'>
                  {userData.name}
                </h1>
              </div>
              <div>
                <h2 className='text-[16px] font-light text-center mt-2 font-roboto-text text-secondary'>
                  {userData.description}
                </h2>
              </div>
              <div className='flex gap-10 mt-6'>
                <h2 className='text-[20px] font-normal text-center flex font-roboto-text'>
                  <img
                    src={followers}
                    className='flex mx-4'
                    alt='followersicon'
                  />
                  {userData.followers}
                  <h2 className='flex text-[20px] text-placeholder mx-2 font-roboto-text'>
                    followers
                  </h2>
                </h2>
                <h2 className='text-[20px] font-normal text-center flex font-roboto-text'>
                  <img
                    src={followers}
                    className='flex mx-4'
                    alt='followingicon'
                  />
                  {userData.following}
                  <h2 className='flex text-[20px] text-placeholder mx-2 font-roboto-text'>
                    following
                  </h2>
                </h2>
              </div>
              <button type='button'>
                <h2 className='text-[16px] hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4 font-roboto-text'>
                  Follow
                </h2>
              </button>
              <div className='flex-col justify-center items-center w-fit mt-4'>
                <h3 className='text-[14px] text-center text-placeholder font-roboto-text'>
                  Quote
                </h3>
                <h2 className='italic text-[20px] font-normal text-center text-secondary font-roboto-text'>
                  &quot;{userData.quote}&quot;
                </h2>
              </div>
              <div className='flex justify-center text-center items-center mt-4 w-fit'>
                <a
                  href={userData.link}
                  className='inline-block text-[20px] font-normal text-center text-primary font-roboto-text'
                  aria-label='Link to external website'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={link}
                    className='mx-2 inline-block'
                    alt='linkicon'
                  />
                  {userData.link}
                </a>
              </div>
              <div className='flex flex-col justify-start text-start text-[20px] text-main font-normal font-roboto-text mt-4 mx-16'>
                BIO
                <h2 className='text-md flex font-normal text-start text-[16px] mt-4 text-secondary font-roboto-text'>
                  {userData.BIO}
                </h2>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col justify-around rounded-3xl my-24'>
            <div className='flex w-full justify-around'>
              <div className='flex w-fit flex-col items-center'>
                <div className='flex'>
                  <h1 className='font-normal text-secondary text-center text-[16px] font-roboto-text'>
                    Created Roadmaps
                  </h1>
                </div>
                <div className='flex'>
                  <img src={dizaign} className='flex' alt='line' />
                  <h2 className='text-2xl font-normal mx-4 text-center font-roboto-text'>
                    {userData.createdRoadmaps}
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
                  <h2 className='text-2xl font-normal mx-4 text-center font-roboto-text'>
                    {userData.completedRoadmaps}
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
                  <h2 className='text-2xl font-normal text-center mx-4 font-roboto-text'>
                    {userData.roadmapProgressData.length}
                  </h2>
                  <img src={dizaign} className='flex' alt='line' />
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={placeholderchart} alt='chart' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
