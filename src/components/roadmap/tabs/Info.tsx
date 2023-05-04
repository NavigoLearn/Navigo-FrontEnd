import React from 'react';
import { useStore } from '@nanostores/react';
import roadmapState from '@store/roadmap/data/roadmap_state';
import InfoView from '@components/roadmap/tabs/infoView';
import InfoEditing from './InfoEditing';

const Info = () => {
  const { editing } = useStore(roadmapState);
  return editing ? <InfoEditing /> : <InfoView />;
};

export default Info;
