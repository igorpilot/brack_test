import Image from "next/image";
import { notFound } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { CopyButton } from "@/components/CopyButton";
import { getHeroImage } from "@/lib/utils/getIdOrImg";
import { fetchHero } from "@/lib/api/swapiApi";
import { heroAllDetails } from "@/data/heroesInfo";

interface HeroPageProps {
  params: { id: string };
}

export default async function HeroDetailPage({ params }: HeroPageProps) {
  const hero = await fetchHero(params.id);
  if (!hero) return notFound();
  const imageUrl = getHeroImage(params.id);
  const pageUrl = ROUTES.BASE_URR + ROUTES.HERO(params.id);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 min-h-screen ">
        <div className="flex flex-col md:flex-row gap-8 rounded-xl p-6 shadow-lg">
          <div className="flex-shrink-0 w-full md:w-1/3 max-w-xs mx-auto md:mx-0 rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={hero.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold ">{hero.name}</h1>
              <CopyButton url={pageUrl} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {heroAllDetails(hero).map((row) => (
                <InfoRow key={row.label} label={row.label} value={row.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-1">
      <dt className="font-semibold ">{label}:</dt>
      <dd>{value}</dd>
    </div>
  );
}
