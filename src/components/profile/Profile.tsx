import React from 'react';
import { useStore } from '@nanostores/react';
import user from '../../store/userStore';
import eugene from '../../assets/eugensex.png';
import followers from '../../assets/followers.svg';
import link from '../../assets/link.svg';

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
  completedRoadmaps: 5,
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
          <div className='flex justify-between rounded-3xl w-10/12 mt-44 '>
            <div className='flex flex-col justify-center items-center w-full transform my-12'>
              <div className='w-fit absolute -top-80'>
                <img
                  className='rounded-full w-full flex'
                  src={userData.avatar}
                  alt='profile'
                />
              </div>
              <div className='flex justify-center items-center text-center w-fit'>
                <h1 className='text-3xl font-bold'>{userData.name}</h1>
              </div>
              <div>
                <h2 className='text-2xl font-normal text-center mt-2'>
                  {userData.description}
                </h2>
              </div>
              <div className='flex gap-10 mt-6'>
                <h2 className='text-[20px] font-normal text-center flex'>
                  <img
                    src={followers}
                    className='flex mx-4'
                    alt='followersicon'
                  />
                  {userData.followers}
                </h2>
                <h2 className='text-[20px] font-normal text-center flex'>
                  <img
                    src={followers}
                    className='flex mx-4'
                    alt='followingicon'
                  />
                  {userData.following}
                </h2>
              </div>
              <button type='button'>
                <h2 className='text-[16px] hover:underline text-white font-normal py-2 px-16 bg-primary rounded-3xl mt-4'>
                  Follow
                </h2>
              </button>
              <div className='flex-col justify-center items-center w-fit mt-4'>
                <h3 className='text-sm text-center text-slate-400'>Quote</h3>
                <h2 className='italic  font-normal text-center text-placeholder'>
                  &quot;{userData.quote}&quot;
                </h2>
              </div>
              <a
                href={userData.link}
                className='flex justify-center text-[20px] items-center w-fit mt-4 text-primary'
                aria-label='Link to external website'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={link} className='flex mx-4 w-8' alt='linkicon' />
                {userData.link}
              </a>
              <div className='flex flex-col justify-start text-start font-bold mt-4 mx-24'>
                BIO
                <h2 className='text-md flex font-normal text-start mt-4 text-black'>
                  {userData.BIO}
                </h2>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-around rounded-3xl my-24'>
            <div className='flex w-fit flex-col items-center'>
              <div className='flex'>
                <h1 className='font-bold text-slate-400'>Completed Roadmaps</h1>
              </div>
              <div className='flex'>
                <h2 className='text-2xl font-normal text-center'>
                  {userData.completedRoadmaps}
                </h2>
              </div>
            </div>
            <div className='flex flex-col items-center w-fit'>
              <div className='flex items-center w-fit'>
                <h1 className='font-bold text-slate-400'>
                  Roadmaps in progress
                </h1>
              </div>
              <div className='flex items-center w-fit'>
                <h2 className='text-2xl font-normal text-center'>
                  {userData.roadmapProgressData.length}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
