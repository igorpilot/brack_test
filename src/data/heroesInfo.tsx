import { Hero } from "@/types/swapiTypes";

export const heroesCardDetails = (hero: Hero) => {
  return [
    { label: "Gender", value: hero.gender },
    { label: "Birth", value: hero.birth_year },
    { label: "Height", value: hero.height },
    { label: "Mass", value: hero.mass },
    { label: "Hair", value: hero.hair_color },
    { label: "Skin", value: hero.skin_color },
    { label: "Eyes", value: hero.eye_color },
  ];
};