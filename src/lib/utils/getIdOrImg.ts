export function getId(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}
export const getHeroImage = (url: string) => {
  const id = getId(url);
  return `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;
};
