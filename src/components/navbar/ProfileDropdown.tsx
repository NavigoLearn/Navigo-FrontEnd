import React from 'react';
import { handleLogout } from '@components/auth/socialAuth';

const SvgLogoutSvg = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 90 97'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M49 2.5H3V94H49'
        stroke='black'
        strokeWidth='5'
        className='stroke-3 group-hover/button:stroke-white transition-all duration-200'
      />
      <path
        d='M88.7678 51.7678C89.7441 50.7915 89.7441 49.2085 88.7678 48.2322L72.8579 32.3223C71.8816 31.346 70.2986 31.346 69.3223 32.3223C68.346 33.2986 68.346 34.8816 69.3223 35.8579L83.4645 50L69.3223 64.1421C68.346 65.1184 68.346 66.7014 69.3223 67.6777C70.2986 68.654 71.8816 68.654 72.8579 67.6777L88.7678 51.7678ZM27 52.5H87V47.5H27V52.5Z'
        fill='black'
        className=' group-hover/button:fill-white transition-all duration-200'
      />
    </svg>
  );
};
const SvgProfileSvg = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <g id='style=linear'>
          <g id='profile'>
            <path
              id='vector'
              d='M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z'
              stroke='#000000'
              className='stroke-[1.15px] group-hover/button:stroke-white  transition-all duration-200'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              id='rec'
              d='M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z'
              stroke='#000000'
              className='stroke-[1.15px] group-hover/button:stroke-white  transition-all duration-200'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SvgProfileComponent = () => {
  return (
    <button
      type='button'
      className='w-full flex justify-center py-2  mt-3 group/button hover:bg-primary transition-all duration-200'
      onClick={() => {
        window.location.href = '/profile';
      }}
    >
      <div className='absolute border-black bg-white group-hover/button:bg-primary w-full h-5 top-0 duration-200 transition-all ' />
      <div className='w-4/6'>
        <SvgProfileSvg />
      </div>
    </button>
  );
};

const SvgLogoutComponent = () => {
  return (
    <button
      type='button'
      className='w-full flex justify-center py-2 pt-3  group/button hover:bg-primary transition-all duration-200'
      onClick={() => {
        // logs out user
        handleLogout();
      }}
    >
      <div className='w-3/6 p-[1px] ml-1 z-10'>
        <SvgLogoutSvg />
      </div>
      <div className='absolute border-black bg-white group-hover/button:bg-primary w-full h-10 bottom-0 duration-200 transition-all z-0 ' />
    </button>
  );
};

const ProfileDropdown = ({
  profilePictureUrl,
}: {
  profilePictureUrl: string;
}) => {
  return (
    <li className='flex relative group/wrapper  w-12 h-12 mr-2'>
      <div className=' absolute top-0 flex group/wrapper w-20 h-40'>
        <a className='' href='/profile'>
          <img
            src={profilePictureUrl}
            alt='icon'
            className='w-10 h-10 rounded-full flex m-1 mr-4'
          />
        </a>
        <div className='absolute flex flex-col w-12 overflow-hidden transition-all duration-300 h-4 opacity-0 group-hover/wrapper:opacity-100 group-hover/wrapper:h-[125px]  top-12 rounded-full bg-white shadow-standard '>
          <div className='w-full flex flex-col justify-center items-center'>
            <SvgProfileComponent />
            <SvgLogoutComponent />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProfileDropdown;
