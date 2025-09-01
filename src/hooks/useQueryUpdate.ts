import { ROUTES } from "@/lib/constants/routes";
import { useRouter } from "next/navigation";

export const useQueryUpdater = () => {
  const router = useRouter();

  const setQuery = (updates: Record<string, string | undefined>) => {
    const newParams = updateQueryParams(updates);
    router.push(`${ROUTES.HEROES_LIST}?${newParams}`);
  };

  const handlePageChange = (newPage: number) =>
    setQuery({ page: String(newPage) });
  const handleSearchChange = (q: string) => setQuery({ search: q, page: "1" });

  return { handlePageChange, handleSearchChange };
};
const updateQueryParams = (updates: Record<string, string | undefined>) => {
  const params = new URLSearchParams(window.location.search);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === undefined || value === "") params.delete(key);
    else params.set(key, value);
  });

  return params.toString();
};
