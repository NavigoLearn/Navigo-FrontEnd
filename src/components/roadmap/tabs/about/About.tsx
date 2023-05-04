import React, { useRef, useEffect, useState } from 'react';
import AboutNonEditField from '@components/roadmap/tabs/about/AboutNonEditField';
import AboutEditingField from '@components/roadmap/tabs/about/AboutEditingField';
import { useStore } from '@nanostores/react';
import tabStore, { setTabAboutProp } from '@store/roadmap/display/tab-manager';
import { TabAbout } from '@type/roadmap/tab-manager';
import EditingManagerTabs from '@components/roadmap/tabs/EditingManagerTabs';
import useStateAndRef from '@hooks/useStateAndRef';
import AboutStaticField from '@components/roadmap/tabs/about/AboutStaticField';
import AboutEditingFieldTextarea from '@components/roadmap/tabs/about/AboutEditingFieldTextarea';
import roadmapVisitData, {
  validData,
} from '@store/roadmap/data/roadmap-visit-data';
import { divWrapper } from '../utils/logic';

const About = () => {
  const fields = ['name', 'author', 'description'];
  const longFields = ['description'];
  const editableFields = ['name', 'description'];

  const capLens = {
    name: 20,
    description: 100,
  };

  const { about: aboutStore } = useStore(tabStore);
  const [about, setAbout, aboutRef] = useStateAndRef(aboutStore);
  const [render, setRender] = useState(false);

  const PropertyHOC = useRef(EditingManagerTabs());
  const Property = PropertyHOC.current;

  const { visitorIsOwner } = useStore(roadmapVisitData);
  const editableRef = useRef([]);

  useEffect(() => {
    if (visitorIsOwner && validData()) {
      editableRef.current = [...editableFields];
    } else {
      editableRef.current = [];
    }
    setRender((prev) => !prev);
  }, [visitorIsOwner]);

  return (
    <div className='h-full w-full relative border-t-2 border-t-black md:border-t-0'>
      <div className='w-5/6 flex justify-between items-center mx-8 mt-6 '>
        <div className=' font-kanit-text font-semibold text-2xl md:text-4xl  '>
          About
        </div>
      </div>

      <div className='mt-4'>
        {fields.map((field: keyof TabAbout) => {
          return (
            <div key={field}>
              {editableRef.current.includes(field) &&
                divWrapper(
                  <div className=' w-full'>
                    <div className=' font-light text-secondary text-base'>
                      {field}
                    </div>
                    <Property
                      EditingComponent={
                        longFields.includes(field)
                          ? AboutEditingFieldTextarea
                          : AboutEditingField
                      }
                      NonEditingComponent={AboutNonEditField}
                      data={aboutRef.current[field]}
                      persistDataSave={(value) => {
                        setTabAboutProp(field, value);
                      }}
                      capLen={capLens[field]}
                    />
                  </div>
                )}
              {!editableRef.current.includes(field) && (
                <AboutStaticField field={field} data={about[field]} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
