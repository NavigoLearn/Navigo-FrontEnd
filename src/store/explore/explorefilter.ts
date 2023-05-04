import { atom } from 'nanostores';

const filterObject = atom({});

export const dataSave = (value: object) => {
  filterObject.set({ ...value });
};

export const setData = (cookieData) => {
  filterObject.set({ ...cookieData });
};

// This will return in filterObj an object with the key mobileFilter
export default filterObject;
