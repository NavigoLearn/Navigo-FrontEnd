import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import buttonsEditOwner from '@components/roadmap/sidebar/buttons-edit';
import buttonsCreate from '@components/roadmap/sidebar/buttons-create';
import userStatusStore from '@store/user/user-status';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import NewButtonDesktop from '@components/roadmap/sidebar/NewButtonDesktop';
import Ball from '@components/roadmap/sidebar/Ball';
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
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      // get client bounding rect
      const sidebarRect = sidebar.getBoundingClientRect();
      console.log(sidebarRect);
    }
  }, []);

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
      <div
        ref={sidebarRef}
        className='bg-white rounded-xl w-20 h-full relative transition-all ease-linear duration-100 drop-shadow-xl '
      >
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
        <Ball />
      </div>
    </div>
  );
};

export default SideBar;
