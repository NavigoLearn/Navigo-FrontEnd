import explore from 'src/Assets/explore.svg';
import feedback from 'src/Assets/feedback.svg';
import home from 'src/Assets/home.svg';
import profile from 'src/Assets/profile.svg';
import circle from 'src/Assets/circle.svg';

const universalLinks = [
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
];

const loggedLinks = [
  {
    title: 'Profile',
    path: '/profile',
    cName: 'text-2xl hover:underline flex items-center text-center',
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
    cName: 'text-2xl hover:underline flex items-center text-center justify-end',
    id: 1,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'text-2xl text-background hover:underline flex items-center text-center bg-primary rounded-full px-4 py-2 justify-end ml-auto',
    id: 2,
  },
];

const mobileLogged = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Profile',
    path: '/profile',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: profile,
    id: 4,
  },
];

const mobileGuest = [
  {
    title: 'Home',
    path: '/home',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: home,
    id: 1,
  },
  {
    title: 'Explore',
    path: '/explore',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: explore,
    id: 2,
  },
  {
    title: 'Feedback',
    path: '/feedback',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: feedback,
    id: 3,
  },
  {
    title: 'Login',
    path: '/login',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline w-10/12 h-20 justify-center',
    cIcon: profile,
    id: 4,
  },
  {
    title: 'Get Started',
    path: '/signup',
    cName:
      'flex items-center text-center text-2xl p-16 m-auto hover:underline bg-primary text-background rounded-full px-4 py-2 justify-center h-20',
    id: 5,
  },
];

export { loggedLinks, guestLinks, mobileLogged, mobileGuest, universalLinks };
