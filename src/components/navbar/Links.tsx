import explore from 'src/Assets/explore.svg';
import feedback from 'src/Assets/feedback.svg';
import home from 'src/Assets/home.svg';
import profile from 'src/Assets/profile.svg';

const LoggedLinks = [
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

const GuestLinks = [
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
    cName: 'text-2xl hover:underline flex items-center text-center',
    id: 5,
  },
];

export { LoggedLinks, GuestLinks };
