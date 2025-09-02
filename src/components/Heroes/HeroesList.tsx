"use client";

import { HeroResponse } from "@/types/swapiTypes";
import { SearchBar } from "./SearchBar";
import { useQueryUpdater } from "@/hooks/useQueryUpdate";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { EmptyState } from "./EmptyState";
import { HeroGrid } from "./HeroGrid";
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
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-stars z-0" />
      <div className="relative p-4 flex flex-col md:flex-row gap-6 rounded-xl bg-gray-900/80">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold"
            aria-label="Show filters"
          >
            Filters
          </button>
        </div>

        <aside
          className={`w-full md:w-64 ${
            showFilters
              ? "fixed inset-0 z-20 bg-gray-900/95 p-4"
              : "hidden md:block"
          }`}
        >
          <div className="flex justify-end md:hidden mb-4">
            <button
              onClick={() => setShowFilters(false)}
              className="px-2 py-1 text-yellow-400 font-bold"
              aria-label="Close filters"
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
