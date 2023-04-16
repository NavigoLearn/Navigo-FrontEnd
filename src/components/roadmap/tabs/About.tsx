import React, { useRef, useEffect } from 'react';
import AboutNonEditField from '@components/roadmap/tabs/AboutNonEditField';
import AboutEditingField from '@components/roadmap/tabs/AboutEditingField';
import { useStore } from '@nanostores/react';
import tabStore, { setTabAboutProp } from '@store/runtime/tab-manager';
import { TabAbout } from '@type/roadmap/tab-manager';
import EditingManagerTabs from '@components/roadmap/nodes/HOCs/EditingManagerTabs';
import useStateAndRef from '@hooks/useStateAndRef';
import { divWrapper } from './utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const { about: aboutStore } = useStore(tabStore);
  const [about, setAbout, aboutRef] = useStateAndRef(aboutStore);

  const PropertyHOC = useRef(EditingManagerTabs());
  const Property = PropertyHOC.current;

  useEffect(() => {
    return () => {
      // saves to db eventual changes
    };
  }, []);

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
                <div className=' flex w-full gap-2 items-center'>
                  <div className=' font-light text-secondary text-base'>
                    {field} :
                  </div>
                  <Property
                    EditingComponent={AboutEditingField}
                    NonEditingComponent={AboutNonEditField}
                    data={aboutRef.current[field]}
                    persistDataSave={(value) => {
                      setTabAboutProp(field, value);
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
