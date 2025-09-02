import { formatDate } from "@/lib/utils/formatDate";
import { Hero } from "@/types/swapiTypes";
import Link from "next/link";
type DetailRow = { label: string; value: React.ReactNode };
export const heroesCardDetails = (hero: Hero): DetailRow[] => {
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
export const heroAllDetails = (hero: Hero): DetailRow[] => {
  return [
    ...heroesCardDetails(hero),
    {
      label: "Homeworld",
      value: hero.homeworld ? (
        <Link href="#" className="text-blue-400 hover:underline">
          Homeworld
        </Link>
      ) : (
        "-"
      ),
    },
    {
      label: "Films",
      value:
        hero.films && hero.films.length > 0
          ? hero.films.map((f, i) => (
              <Link
                key={i}
                href="#"
                className="text-blue-400 hover:underline mr-2"
              >
                Film {i + 1}
              </Link>
            ))
          : "-",
    },
    {
      label: "Species",
      value:
        hero.species && hero.species.length > 0
          ? hero.species.map((s, i) => (
              <Link
                key={i}
                href="#"
                className="text-blue-400 hover:underline mr-2"
              >
                Species {i + 1}
              </Link>
            ))
          : "-",
    },
    {
      label: "Vehicles",
      value:
        hero.vehicles && hero.vehicles.length > 0
          ? hero.vehicles.map((v, i) => (
              <Link
                key={i}
                href="#"
                className="text-blue-400 hover:underline mr-2"
              >
                Vehicle {i + 1}
              </Link>
            ))
          : "-",
    },
    {
      label: "Starships",
      value:
        hero.starships && hero.starships.length > 0
          ? hero.starships.map((s, i) => (
              <Link
                key={i}
                href="#"
                className="text-blue-400 hover:underline mr-2"
              >
                Starship {i + 1}
              </Link>
            ))
          : "-",
    },
    { label: "Created", value: formatDate(hero.created) ?? "-" },
    { label: "Edited", value: formatDate(hero.edited) ?? "-" },
  ];
};
export const heroesForCarousel = [
  { name: "Luke Skywalker", id: 1 },
  { name: "Darth Vader", id: 4 },
  { name: "Leia Organa", id: 5 },
  { name: "Han Solo", id: 14 },
  { name: "Yoda", id: 20 },
];
