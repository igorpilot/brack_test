import { heroesCardDetails } from "@/data/heroesInfo";
import { getHeroImage } from "@/lib/utils/getIdOrImg";
import { Hero } from "@/types/swapiTypes";
import Image from "next/image";


export const HeroCard = ({ hero }: { hero: Hero }) => {
  const img=getHeroImage(hero.url)
    return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-2 shadow-lg hover:shadow-xl transition transform hover:translate-y-1 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Image
          src={img}
          alt={hero.name}
          width={200}
          height={300}
          className="rounded-xl w-full h-auto  object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
        />
        <div className="md:col-span-2">
          <h2
            className="text-xl font-bold mb-2 hover:cursor-pointer"
          >
            {hero.name}
          </h2>
          <dl className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
            {heroesCardDetails(hero).map(({ label, value }) => (
              <div key={label} className="flex md:flex-col gap-1">
                <dt className="font-semibold">{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
