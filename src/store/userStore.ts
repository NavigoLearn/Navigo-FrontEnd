import { atom } from 'nanostores';

type User = {
  id: string;
  name: string;
  email: string;
};
const user = atom({} as User);
export default user;
