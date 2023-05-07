import React, { useState, useEffect } from 'react';
import buttonsEditOwner from '@components/roadmap/sidebar/buttons-edit';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import {
  buttonsViewOwner,
  buttonsViewVisitor,
} from '@components/roadmap/sidebar/buttons-view';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import GenericButtonMobile from '@components/roadmap/sidebar/GenericButtonMobile';

const SideBarMobile = ({ isCreate }: { isCreate: string }) => {
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
    <div className='flex justify-start pl-4 w-full h-8 absolute -top-10  pointer-events-none '>
      <div />
      <ul className='flex gap-8 '>
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
  );
};

export default SideBarMobile;
