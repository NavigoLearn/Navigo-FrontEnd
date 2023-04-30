import React, { useEffect, useState } from 'react';
import Card from '@components/explorerefr/Card';
import { useStore } from '@nanostores/react';
import cardsFromApi, {
  setRoadmapCardsFromApiProfile,
} from '@store/card_store_explore';
import user from '@store/user';

const CardDisplay = () => {
  const { userId } = useStore(user);
  const [render, setRender] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cardStore = useStore(cardsFromApi);

  useEffect(() => {
    if (userId === '' || !userId) {
      return;
    }
    setRoadmapCardsFromApiProfile(userId).then(() => {
      setRender((prev) => !prev);
      setLoaded(true);
    });
  }, [userId]);
  return (
    <>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-11 xl:grid-cols-3'>
        {loaded &&
          Object.keys(cardStore).map((card: string) => (
            <div key={card} className='flex items-center justify-center'>
              <Card cardStore={cardStore[card]} />
            </div>
          ))}
      </ul>

      {loaded && Object.keys(cardStore).length === 0 && (
        <div className='text-2xl font-semibold w-full flex justify-center items-center mt-10'>
          This user has no roadmaps created yet
        </div>
      )}
    </>
  );
};

export default CardDisplay;
