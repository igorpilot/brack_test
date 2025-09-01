import { HeroesList } from "@/components/Heroes/HeroesList";
import { fetchPeople } from "@/lib/api/swapiApi";
interface PageProps {
  searchParams: Partial<{ page: string; search: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const data = await fetchPeople({ page, search });

  return <HeroesList initialData={data} page={page} search={search} />;
}
