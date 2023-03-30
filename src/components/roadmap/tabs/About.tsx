import React from 'react';
import { useStore } from '@nanostores/react';
import tabStore from '@store/tabinfo';

const About = () => {
  const tabData = useStore(tabStore);
  return <div>About</div>;
};

export default About;
