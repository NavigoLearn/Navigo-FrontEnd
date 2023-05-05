import { atom } from 'nanostores';
import { RoadmapTypeApi } from '@type/explore/card';
import tabManagerStore from '@store/roadmap/display/tab-manager';
import { fetchGetMiniProfileDataById } from '../../../api-wrapper/user/user';
import {
  fetchPostTabAboutDescription,
  fetchPostTabAboutTitle,
} from '../../../api-wrapper/roadmap/tab-data';

const aboutTabStore = atom({
  name: '',
  author: '',
  description: '',
} as {
  name: string;
  author: string;
  description: string;
});

export default aboutTabStore;

export async function setTabAboutFromApi(roadmap: RoadmapTypeApi) {
  const newTab = aboutTabStore.get();
  newTab.name = roadmap.name;
  const miniProfile = await fetchGetMiniProfileDataById(roadmap.ownerId);
  newTab.author = miniProfile.name;
  newTab.description = roadmap.description;
  aboutTabStore.set({
    ...newTab,
  });
}

export function setTabAboutName(name: string, roadmapId: string) {
  const newTab = aboutTabStore.get();
  newTab.name = name;
  // also dispatches request to backend
  fetchPostTabAboutTitle(roadmapId, name);
  aboutTabStore.set({
    ...newTab,
  });
}

export function setTabAboutDescription(description: string, roadmapId: string) {
  const newTab = aboutTabStore.get();
  newTab.description = description;
  // also dispatches request to backend
  fetchPostTabAboutDescription(roadmapId, description);
  aboutTabStore.set({
    ...newTab,
  });
}

export function setTabAboutProp(
  field: string,
  value: string,
  roadmapId: string
) {
  const updaters = {
    name: setTabAboutName,
    description: setTabAboutDescription,
  };
  console.log(field, value);
  updaters[field](value, roadmapId);
  console.log(aboutTabStore.get());
}
