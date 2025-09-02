import { Hero, HeroResponse } from "@/types/swapiTypes";

export const parseParams = (params: Record<string, string>) => ({
  page: Number(params.page) || 1,
  search: params.search || "",
  gender: params.gender || "",
  hair_color: params.hair_color || "",
  skin_color: params.skin_color || "",
  eye_color: params.eye_color || "",
  heightMin: params.heightMin || "",
  heightMax: params.heightMax || "",
  massMin: params.massMin || "",
  massMax: params.massMax || "",
});

export const filterHeroes = (
  results: HeroResponse["results"],
  filters: ReturnType<typeof parseParams>,
) => {
  return results.filter((hero: Hero) => {
    if (
      filters.gender &&
      hero.gender.toLowerCase() !== filters.gender.toLowerCase()
    )
      return false;
    if (
      filters.hair_color &&
      !hero.hair_color.toLowerCase().includes(filters.hair_color.toLowerCase())
    )
      return false;
    if (
      filters.skin_color &&
      !hero.skin_color.toLowerCase().includes(filters.skin_color.toLowerCase())
    )
      return false;
    if (
      filters.eye_color &&
      !hero.eye_color.toLowerCase().includes(filters.eye_color.toLowerCase())
    )
      return false;
    if (filters.heightMin && Number(hero.height) < Number(filters.heightMin))
      return false;
    if (filters.heightMax && Number(hero.height) > Number(filters.heightMax))
      return false;
    if (
      filters.massMin &&
      !isNaN(Number(hero.mass)) &&
      Number(hero.mass) < Number(filters.massMin)
    )
      return false;
    if (
      filters.massMax &&
      !isNaN(Number(hero.mass)) &&
      Number(hero.mass) > Number(filters.massMax)
    )
      return false;
    return true;
  });
};
