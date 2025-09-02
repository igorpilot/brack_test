import { Filters } from "@/components/FilterPanel/FilterPanel";
import { ROUTES } from "@/lib/constants/routes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useQueryUpdater = ({ page }: { page: number }) => {
  const router = useRouter();

  const setQuery = useCallback(
    (updates: Record<string, string | undefined>) => {
      const newParams = updateQueryParams(updates);
      router.push(`${ROUTES.HEROES_LIST}?${newParams}`);
    },
    [router]
  );

  const handlePageChange = useCallback(
    (newPage: number) => setQuery({ page: String(newPage) }),
    [setQuery]
  );
  const handleSearchChange = useCallback(
    (q: string) => setQuery({ search: q, page: "1" }),
    [setQuery]
  );
  const handleFiltersChange = useCallback(
    (filters: Filters) => {
      if (Object.keys(filters).length === 0) {
        router.push(`${ROUTES.HEROES_LIST}?page=${page}`);
        return;
      }
      const updates = Object.entries(filters).reduce<Record<string, string>>(
        (acc, [k, v]) => {
          if (v !== undefined && v !== "") acc[k] = String(v);
          return acc;
        },
        {}
      );
      updates.page = `${page}`;
      setQuery(updates);
    },
    [router, page, setQuery]
  );
  return { handlePageChange, handleSearchChange, handleFiltersChange };
};
const updateQueryParams = (updates: Record<string, string | undefined>) => {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === undefined || value === "") params.delete(key);
    else params.set(key, value);
  });

  return params.toString();
};
