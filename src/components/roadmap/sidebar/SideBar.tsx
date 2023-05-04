import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import buttonsEditOwner from '@components/roadmap/sidebar/buttons-edit';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import loggedUser, { getLoggedUserId } from '@store/user/logged-user';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import GenericButtonDesktop from '@components/roadmap/sidebar/GenericButtonDesktop';
import { buttonsViewVisitor, buttonsViewOwner } from './buttons-view';

const SideBar = ({ isCreate }: { isCreate: string }) => {
  const [hover, setHover] = useState(false);
  const { editing } = useStore(roadmapState);
  const [hydrated, setHydrated] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

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
    if (hydrated && !editing && !isCreate && isOwner) {
      return buttonsViewOwner;
    }
    if (hydrated && editing && !isCreate && isOwner) {
      return buttonsEditOwner;
    }
    if (hydrated && isCreate) {
      return buttonsCreate;
    }
    if (hydrated && !isOwner) {
      return buttonsViewVisitor;
    }
    return [];
  };

  return (
    <div
      className='w-48 h-full  top-0 absolute left-0'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`
      bg-white  h-full top-0 transition-all ease-linear duration-100 items-center justify-center gap-5 drop-shadow-xl flex-col-4 absolute left-0
       ${hover ? 'w-48' : 'w-20 m-auto'} 
        `}
      >
        <ul className='flex-col-4 min-h-full w-full gap-10 justify-self-center items-center '>
          {getButtonRoute().map((button) => {
            return (
              <GenericButtonDesktop
                key={button.id}
                id={button.id}
                onClick={button.clickHandler}
                hover={hover}
                title={button.title}
                cIcon={button.cIcon}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
