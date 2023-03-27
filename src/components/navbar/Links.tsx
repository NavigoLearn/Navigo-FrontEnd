import explore from 'src/Assets/explore.svg';
import feedback from 'src/Assets/feedback.svg';
import home from 'src/Assets/home.svg';
import profile from 'src/Assets/profile.svg';

const loggedLinks = [
  {
    title: 'Home',
    path: '/home',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName: 'text-3xl hover:underline flex items-center text-center',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 3,
  },
  {
    title: 'Profile',
    path: '/profile',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 4,
  },
];

const guestLinks = [
  {
    title: 'Home',
    path: '/home',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName: 'text-3xl hover:underline flex items-center text-center',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 3,
  },
  {
    title: 'Login',
    path: '/login',
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 4,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'text-2xl text-background hover:underline flex items-center text-center bg-primary rounded-full px-4 py-2 text-white',
    id: 5,
  },
];

const mobileLogged = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text p-8 w-full table',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text p-8 w-full table',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text p-8 w-full table',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Profile',
    path: '/profile',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text p-8 w-full table',
    cIcon: profile,
    id: 4,
  },
];

const mobileGuest = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl w-2/4 m-auto items-center text-center text-text p-8 table',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text m-auto w-2/4 items-center text-center p-8 w-full table',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text m-auto w-2/4 items-center text-center p-8 w-full table',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Login',
    path: '/login',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl text-text m-auto items-center text-center w-2/4 p-8 w-full table',
    cIcon: profile,
    id: 4,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'text-center hover:underline hover:underline-primary text-2xl p-8 m-auto items-center text-center justify-self-center flex w-2/4 table bg-primary rounded-full text-white',
    cIcon: profile,
    id: 5,
  },
];

export { loggedLinks, guestLinks, mobileLogged, mobileGuest };
