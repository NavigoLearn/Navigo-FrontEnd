export const a = 1;
export function processUserUrlPic(profilePictureUrl: string): string {
  const newProfilePictureUrl =
    profilePictureUrl !== ''
      ? profilePictureUrl
      : 'https://media.istockphoto.com/id/470100848/ro/vector/pictograma-profilului-masculin-alb%C4%83-pe-fundal-albastru.jpg?s=612x612&w=0&k=20&c=-We-8zY-Oj7MMSuKwpOEkm7QUX8Gnc4Bk0KcBIO8lYY=';
  return newProfilePictureUrl;
}
