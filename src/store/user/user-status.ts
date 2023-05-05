import { atom } from 'nanostores';

const loggedUser = atom({
  userId: '',
  isLogged: false,
  loaded: false,
} as {
  userId: string;
  isLogged: boolean;
  loaded: boolean;
});

export const setIsLogged = (isLogged: boolean) => {
  loggedUser.set({ ...loggedUser.get(), isLogged });
};

export const setUserId = (userId: string) => {
  loggedUser.set({ ...loggedUser.get(), userId });
};

export const setLoaded = (loaded: boolean) => {
  loggedUser.set({ ...loggedUser.get(), loaded });
};

export default loggedUser;
