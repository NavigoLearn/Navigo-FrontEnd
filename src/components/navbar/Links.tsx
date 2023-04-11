import explore from '@assets/explore.svg';
import feedback from '@assets/feedback.svg';
import home from '@assets/home.svg';
import profile from '@assets/profile.svg';
import circle from '@assets/circle.svg';

const universalLinks = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'text-sm hover:underline flex items-center text-center font-normal inline-block text-secondary ',
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      ' text-base hover:underline flex items-center text-center font-medium text-text/80',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'text-sm hover:underline flex items-center text-center font-normal text-secondary ',
    id: 3,
  },
];

const loggedLinks = [
  {
    title: 'Profile',
    path: '/profile',
    cName: ' text-sm hover:underline flex items-center text-center font-normal',
    cIcon: profile,
    id: 1,
  },
  {
    path: '/profile',
    cName: 'flex items-center',
    cIcon: circle,
    id: 2,
  },
];

const guestLinks = [
  {
    title: 'Login',
    path: '/login',
    cName:
      'text-sm hover:underline flex items-center text-center justify-end font-normal',
    id: 1,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'text-background text-sm hover:underline flex items-center text-center bg-primary rounded-md px-4 py-1 justify-end font-medium',
    id: 2,
  },
];

const mobileLogged = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center font-normal',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center font-medium',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center font-normal',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Profile',
    path: '/profile',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center font-normal',
    cIcon: profile,
    id: 4,
  },
];

const mobileGuest = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center -translate-x-1',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center font-medium -translate-x-1',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-2xl p-12 m-auto hover:underline w-10/12 h-12 justify-center',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Login',
    path: '/login',
    cName:
      'flex items-center text-center text-2xl p-12 mx-auto hover:underline w-10/12 h-12 justify-center -translate-x-2',
    cIcon: profile,
    id: 4,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'flex items-center text-center text-2xl m-auto hover:underline bg-primary text-background rounded-full px-4 py-8 justify-center h-12 rounded-xl w-56 h-14',
    id: 5,
  },
];

export { loggedLinks, guestLinks, mobileLogged, mobileGuest, universalLinks };
