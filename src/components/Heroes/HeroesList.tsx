"use client";

import { Hero, HeroResponse } from "@/types/swapiTypes";
import { HeroCard } from "./HeroCard";
import { SearchBar } from "./SearchBar";
import { useQueryUpdater } from "@/hooks/useQueryUpdate";
import { Pagination } from "./Pagination";
interface Props {
  initialData: HeroResponse;
  page: number;
  search: string;
}
export const HeroesList = ({ initialData, page, search }: Props) => {
  const { handleSearchChange, handlePageChange } = useQueryUpdater();
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="p-4  rounded-xl">
        <main className="flex-1">
          <SearchBar value={search} onChange={handleSearchChange} />

          {initialData.results.length === 0 ? (
            <EmptyState />
          ) : (
            <HeroGrid heroes={initialData.results} />
          )}

          <Pagination
            page={page}
            count={initialData.count}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center mt-12 text-center">
    <p className="text-2xl font-semibold text-yellow-400 mb-2">
      No heroes found
    </p>
    <p className="text-gray-400">Try adjusting your search or filters.</p>
  </div>
);

const HeroGrid = ({ heroes }: { heroes: Hero[] }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6">
    {heroes.map((hero) => (
      <HeroCard key={hero.url} hero={hero} />
    ))}
  </div>
);
