import React, { useRef } from 'react';
import { useStore } from '@nanostores/react';
import tabStore, { setAboutTabProp } from '@store/runtime/tab-manager';
import stateManager from '@components/roadmap/nodes/edit-logic-modules/StateManager';
import AboutEditingField from '@components/roadmap/tabs/AboutEditingField';
import AboutNonEditField from '@components/roadmap/tabs/AboutNonEditField';
import {
  postTabAboutPropFlow,
  setTabAboutFlow,
} from '@typescript/roadmap/tab-logic-flows';
import { getRoadmapId } from '@store/roadmap_state';
import { TabAbout } from '@type/roadmap/tab-manager';
import { divWrapper } from './utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const { about } = useStore(tabStore);

  const PropertyHOC = useRef(stateManager(''));
  const Property = PropertyHOC.current;

  return (
    <div className='h-full w-full relative'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <div className=' font-kanit-text font-semibold text-4xl  '>About</div>
      </div>

      <div className='mt-4'>
        {fields.map((field: keyof TabAbout) => {
          return (
            <div key={field}>
              {divWrapper(
                <div className=' flex gap-2 items-center'>
                  <div className=' font-light text-secondary text-base'>
                    {field} :
                  </div>
                  <Property
                    EditingComponent={AboutEditingField}
                    NonEditingComponent={AboutNonEditField}
                    value={about[field]}
                    persistDataSave={(value) => {
                      // setting about field
                      postTabAboutPropFlow(getRoadmapId(), field, value); // saves to cache and posts to server
                      setAboutTabProp(field, value); // sets the about field in the tab store
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
