import React, { useState, useEffect } from 'react';
import {
  setCardsFromApiDefaultProfile,
  emptyStore,
} from '@store/card_store_explore';
import ProfileDisplay from '@components/profile/mobile/ProfileDisplay';

const MobileProfile = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setCardsFromApiDefaultProfile().then(() => {
      setRender((prev) => !prev);
    });
  }, []);

  return (
    <div className='flex flex-col w-full h-full items-center my-24 text-center'>
      <ProfileDisplay />
      <div className='mt-10 sm:mt-12'>
        <ul className='flex flex-col gap-7 sm:gap-9'>
          {/* {Object.keys(cardStore).map((card: string) => ( */}
          {/*  <div key={card} className='flex items-center justify-center'> */}
          {/*    <Card cardStore={cardStore[card]} /> */}
          {/*  </div> */}
          {/* ))} */}
        </ul>
      </div>
      {/* Here should be introduced a paging system for the profile to scroll thorugh cards with paging, max of 9 cards/page */}
      <div className='my-7' />
    </div>
  );
};

export default MobileProfile;
