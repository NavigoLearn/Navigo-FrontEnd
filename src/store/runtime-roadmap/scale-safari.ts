import { atom } from 'nanostores';

const scaleSafari = atom({
  scale: 1,
} as any);


export function setScaleSafari(scale:number) {
  const originalViewport = scaleSafari.get();
  if(scale!==originalViewport.scale){
    scaleSafari.set({ ...originalViewport, scale });
  }
}

export default scaleSafari;
