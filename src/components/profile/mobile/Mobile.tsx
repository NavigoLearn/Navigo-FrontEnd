import React from 'react';
import ProfileDisplay from '@components/profile/mobile/ProfileDisplay';
import CardDisplay from '@components/profile/common/CardDisplay';

const MobileProfile = () => {
  return (
    <div className='flex flex-col w-full h-full items-center my-24 text-center'>
      <ProfileDisplay />
      <div className='mt-20'>
        <CardDisplay />
      </div>
    </div>
  );
};

export default MobileProfile;
