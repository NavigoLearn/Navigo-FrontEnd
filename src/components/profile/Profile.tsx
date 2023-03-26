import React from 'react';
import { useStore } from '@nanostores/react';
import user from '../../store/userStore';

const Profile = () => {
  const userData = useStore(user);
  console.log('in react component', userData);
  return <div>profile react</div>;
};

export default Profile;
