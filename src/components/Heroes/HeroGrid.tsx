import { Hero } from "@/types/swapiTypes";
import { HeroCard } from "./HeroCard";

export const HeroGrid = ({ heroes }: { heroes: Hero[] }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6">
    {heroes.map((hero) => (
      <HeroCard key={hero.url} hero={hero} />
    ))}
  </div>
);
