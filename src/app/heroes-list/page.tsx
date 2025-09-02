import { HeroesList } from "@/components/Heroes/HeroesList";
import { fetchPeople } from "@/lib/api/swapiApi";
import { filterHeroes, parseParams } from "@/lib/utils/filterHeroes";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Heroes List | AllianceBook",
  description: "Browse your favorite Star Wars heroes.",
};
interface PageProps {
  searchParams: Partial<{
    page: string;
    search: string;
    gender: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    heightMin: string;
    heightMax: string;
    massMin: string;
    massMax: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = parseParams(searchParams);
  const data = await fetchPeople({ page: params.page, search: params.search });
  const filteredResults = filterHeroes(data.results, params);
  return (
    <HeroesList
      initialData={{ ...data, results: filteredResults }}
      page={params.page}
      search={params.search}
    />
  );
}
