import explore from '@assets/explore.svg';
import feedback from '@assets/feedback.svg';
import home from '@assets/home.svg';
import profile from '@assets/profile.svg';
import circle from '@assets/circle.svg';

const universalLinks = [
  {
    title: 'home',
    path: '/home',
    cName:
      'text-[14px] flex items-center text-center font-medium inline-block text-secondary hover:text-main transtion-all duration-300 ',
    id: 1,
    hasUnder: true,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      ' text-md text-main opacity-70 hover:opacity-100 flex items-center text-center font-medium hover:text-main transtion-all duration-300  ',
    cIcon: '',
    id: 2,
    hasUnder: true,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'text-[14px] flex items-center text-center  inline-block font-medium text-secondary hover:text-main transtion-all duration-300 ',
    id: 3,
    hasUnder: true,
  },
];

const loggedLinks = [
  // {
  //   title: 'Profile',
  //   path: '/profile',
  //   cName:
  //     ' text-sm hover:underline flex items-center text-center font-normal hover:underline-offset-4',
  //   cIcon: profile,
  //   id: 1,
  // },
  {
    title: 'Create Roadmap',
    path: '/roadmap/create',
    cName:
      ' text-md font-semibold px-2 py-1 rounded-lg bg-primary border-2 border-transparent hover:border-black hover:bg-transparent hover:text-black transition-all text-white flex items-center text-center font-normal ',
    cIcon: '',
    id: 3,
    hasUnder: false,
  },
];

const guestLinks = [
  {
    title: 'Login',
    path: '/login',
    cName:
      'text-[14px] flex items-center text-center font-medium inline-block text-secondary hover:text-main transtion-all duration-300 ',
    id: 1,
    cIcon: '',
    hasUnder: true,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      ' text-md font-semibold px-2 py-1 rounded-lg bg-primary border-2 border-transparent hover:border-black hover:bg-transparent hover:text-black transition-all text-white flex items-center text-center font-normal ',
    id: 2,
    cIcon: '',
    hasUnder: false,
  },
];

const mobileLogged = [
  {
    title: 'home',
    path: '/home',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-normal -translate-x-1',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-medium -translate-x-1',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-normal -translate-x-1',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Profile',
    path: '/profile',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-normal -translate-x-1',
    cIcon: profile,
    id: 4,
  },
  {
    title: 'Create roadmap',
    path: '/roadmap/create',
    cName:
      'flex items-center text-center text-xl py-8 m-auto  w-full h-8 justify-center font-normal bg-primary text-white ',
    cIcon: '',
    id: 5,
  },
];

const mobileGuest = [
  {
    title: 'home',
    path: '/home',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center -translate-x-1',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center font-medium -translate-x-1',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-xl py-8 m-auto hover:underline w-10/12 h-12 justify-center -translate-x-1',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Login',
    path: '/login',
    cName:
      'flex items-center text-center text-xl py-8 mx-auto hover:underline w-10/12 h-12 justify-center -translate-x-2',
    cIcon: profile,
    id: 4,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'flex items-center text-center text-xl m-auto hover:underline bg-primary text-background rounded-full px-4 py-8 justify-center h-12 rounded-xl w-56 h-14',
    id: 5,
  },
];

export { loggedLinks, guestLinks, mobileLogged, mobileGuest, universalLinks };
