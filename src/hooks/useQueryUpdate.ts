import { Filters } from "@/components/FilterPanel/FilterPanel";
import { ROUTES } from "@/lib/constants/routes";
import { useRouter } from "next/navigation";

export const useQueryUpdater = ({ page }: { page: number }) => {
  const router = useRouter();

  const setQuery = (updates: Record<string, string | undefined>) => {
    const newParams = updateQueryParams(updates);
    router.push(`${ROUTES.HEROES_LIST}?${newParams}`);
  };

  const handlePageChange = (newPage: number) =>
    setQuery({ page: String(newPage) });
  const handleSearchChange = (q: string) => setQuery({ search: q, page: "1" });
  const handleFiltersChange = (filters: Filters) => {
    if (Object.keys(filters).length === 0) {
      router.push(`${ROUTES.HEROES_LIST}?page=${page}`);
      return;
    }
    const updates = Object.entries(filters).reduce<Record<string, string>>(
      (acc, [k, v]) => {
        if (v !== undefined && v !== "") acc[k] = String(v);
        return acc;
      },
      {},
    );
    updates.page = `${page}`;
    setQuery(updates);
  };
  return { handlePageChange, handleSearchChange, handleFiltersChange };
};
const updateQueryParams = (updates: Record<string, string | undefined>) => {
  const params = new URLSearchParams(window.location.search);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === undefined || value === "") params.delete(key);
    else params.set(key, value);
  });

  return params.toString();
};
