import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import buttonsEditOwner from '@components/roadmap/sidebar/buttons-edit';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import userStatusStore from '@store/user/user-status';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import NewButtonDesktop from '@components/roadmap/sidebar/NewButtonDesktop';
import {
  buttonsViewVisitor,
  buttonsViewOwner,
  buttonsTryTool,
} from './buttons-view';

const SideBar = ({ isCreate }: { isCreate: string }) => {
  const [hover, setHover] = useState(false);
  const { editing } = useStore(roadmapState);
  const [hydrated, setHydrated] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const { isLogged, loaded } = useStore(userStatusStore);
  const { visitorIsOwner } = useStore(roadmapVisitData);

  useEffect(() => {
    if (validData()) {
      if (visitorIsOwner) {
        setIsOwner(true);
      }
    }
    if (document.cookie.includes('token')) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    setHydrated(true);
  }, [visitorIsOwner]);

  const getButtonRoute = () => {
    if (hydrated && !editing && !isCreate && isOwner) {
      return buttonsViewOwner;
    }
    if (hydrated && editing && !isCreate && isOwner) {
      return buttonsEditOwner;
    }
    if (hydrated && isCreate && isLogged && loaded) {
      return buttonsCreate;
    }
    if (hydrated && !isOwner && !isCreate) {
      return buttonsViewVisitor;
    }
    if (hydrated && isCreate && !isLogged && loaded) {
      return buttonsTryTool;
    }
    return [];
  };

  return (
    <div className='h-[calc(100%-52px)] top-10 absolute left-4 '>
      <div className='bg-white rounded-xl w-20 h-full relative transition-all ease-linear duration-100 drop-shadow-xl '>
        <ul className='flex-col items-center min-h-full w-full'>
          {hydrated &&
            getButtonRoute().map((button) => {
              return (
                <NewButtonDesktop
                  key={button.id}
                  id={button.id}
                  onClick={button.clickHandler}
                  title={button.title}
                  cIcon={button.cIcon}
                />
              );
            })}
        </ul>
        {/*: ( */}
        {/* <div className='flex justify-center flex-col items-center mt-4'> */}
        {/*  <a href='/signup'> */}
        {/*    <img */}
        {/*      draggable='false' */}
        {/*      src={about} */}
        {/*      alt='icons sidebar' */}
        {/*      className='w-9 h-9 select-none' */}
        {/*    /> */}
        {/*  </a> */}
        {/*  {hover ? ( */}
        {/*    <div className='text-center font-kanit-text text-secondary text-xl'> */}
        {/*      You have to be logged in order to create roadmaps */}
        {/*    </div> */}
        {/*  ) : null} */}
        {/* </div> */}
        {/* ) */}
      </div>
    </div>
  );
};

export default SideBar;
