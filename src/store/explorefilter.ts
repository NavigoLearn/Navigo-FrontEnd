import { atom } from 'nanostores';

const filterObject = atom({});

export const dataSave = (field: 'mobileFilter', value: object) => {
  const newFilter = filterObject.get();
  newFilter[field] = value;
  filterObject.set({ ...newFilter });
};

export const setData = (cookieData) => {
  filterObject.set({ ...cookieData });
};

// This will return in filterObj an object with the key mobileFilter
export default filterObject;
