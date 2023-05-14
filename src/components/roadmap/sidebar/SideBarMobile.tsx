import React, { useState, useEffect } from 'react';
import buttonsEditOwner from '@components/roadmap/sidebar/buttons-edit';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import userStatusStore from '@store/user/user-status';
import {
  buttonsTryTool,
  buttonsViewOwner,
  buttonsViewVisitor,
} from '@components/roadmap/sidebar/buttons-view';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import GenericButtonMobile from '@components/roadmap/sidebar/GenericButtonMobile';
import about from '@assets/about.svg';

const SideBarMobile = ({ isCreate }: { isCreate: string }) => {
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
    setHydrated(true);
  }, [visitorIsOwner]);

  const handleHover = (e) => {
    // set hover based on weather event is mouseenter or mouseleave
    setHover(e.type === 'mouseenter');
  };

  const getButtonRoute = () => {
    if (hydrated && !editing && !isCreate && isOwner && isLogged) {
      return buttonsViewOwner;
    }
    if (hydrated && editing && !isCreate && isOwner && isLogged) {
      return buttonsEditOwner;
    }
    if (hydrated && isCreate && isLogged) {
      return buttonsCreate;
    }
    if (hydrated && !isOwner && isLogged) {
      return buttonsViewVisitor;
    }
    if (hydrated && isCreate && !isLogged && loaded) {
      return buttonsTryTool;
    }

    return [];
  };

  return (
    <>
      <div className='w-full h-12 bg-[#FFFFFF]  opacity-100   absolute top-[-48px] ' />
      <div className='flex justify-start  pl-4 w-full h-8 absolute -top-10 pointer-events-none'>
        <ul className='flex gap-8 z-10 '>
          {getButtonRoute().map((button) => {
            return (
              <GenericButtonMobile
                key={button.id}
                id={button.id}
                onClick={button.clickHandler}
                cIcon={button.cIcon}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBarMobile;
