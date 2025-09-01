"use client";

import { Hero, HeroResponse } from "@/types/swapiTypes";
import { HeroCard } from "./HeroCard";
import { SearchBar } from "./SearchBar";
import { useQueryUpdater } from "@/hooks/useQueryUpdate";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { FilterPanel } from "../FilterPanel/FilterPanel";
interface Props {
  initialData: HeroResponse;
  page: number;
  search: string;
}
export const HeroesList = ({ initialData, page, search }: Props) => {
  const { handleSearchChange, handlePageChange, handleFiltersChange } =
    useQueryUpdater({ page });
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="p-4 flex flex-col md:flex-row gap-6 rounded-xl">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold"
          >
            Filters
          </button>
        </div>

        <aside
          className={`w-full md:w-64 ${showFilters ? "fixed inset-0 z-20 bg-gray-900/95 p-4" : "hidden md:block"}`}
        >
          <div className="flex justify-end md:hidden mb-4">
            <button
              onClick={() => setShowFilters(false)}
              className="px-2 py-1 text-yellow-400 font-bold"
            >
              Close
            </button>
          </div>
          <FilterPanel onChange={handleFiltersChange} />
        </aside>
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
